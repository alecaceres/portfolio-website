import Mailgun, { MailgunMessageData } from 'mailgun.js';
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export const config = {
  api: {
    bodyParser: false, // Disables automatic parsing of the request body
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({
    multiples: true, // Allow parsing of multiple files
    uploadDir: "/tmp", // Specify upload directory
  });

  form.parse(req, async (err: any, fields: formidable.Fields, files: formidable.Files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const mailgun = new Mailgun(require('form-data'));
    const client = mailgun.client({ username: 'api', key: API_KEY });

    const { name, email, message } = fields;

    const messageData:MailgunMessageData = {
      from: 'Mailgun Sandbox <postmaster@sandboxad205fb6415740bca0775d6c977b04d2.mailgun.org>',
      to: 'aleda997@gmail.com',
      subject: 'New message from personal website',
      text: `Hello,

      You have a new form entry from: ${name} ${email}.

      ${message}
      `,
    };

    // Process only the first file attachment
    const file = Object.values(files)?.[0]?.[0];
    if (file && file.filepath) {
      try {
        const fileStream = fs.createReadStream(file.filepath);
        if (file.originalFilename) {
          messageData.attachment = {data: fileStream, filename: file.originalFilename};
        }
        else {
          messageData.attachment = fileStream;
        }
      } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).json({ error: 'Error reading file' });
        return;
      }
    }
    try {
      const emailRes = await client.messages.create(DOMAIN, messageData);
      console.log(emailRes);
      res.status(200).json({ submitted: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  });
}
