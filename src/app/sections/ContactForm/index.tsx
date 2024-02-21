"use client"
import { TwoColumns } from '@/layouts';
import { FormEvent, useState } from 'react';

const SubmittedMessage: React.FC = () => {
  return (
    <div className="text-center">
      <p className="font-semibold text-3xl mb-6">
        Thank you for your message!
      </p>
      <p>I&apos;ll try to contact you soon</p>
    </div>
  );
}

const LeftColumn: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">Contact Me!</h2>
      <hr className="border-secondary-500 border-2" />
      <p className="text-secondary-100 text-xl lg:text-2xl leading-normal">
        Have a project in mind or just want to chat? Feel free to reach out!
        Whether you&apos;re looking to collaborate, discuss opportunities, or simply say hello,
        I&apos;m always open to new connections and exciting ventures.
        Drop me a message using the form below, and I&apos;ll get back to you as soon as possible.
        Looking forward to hearing from you!
      </p>
    </div>
  );
}

interface FormProps {
  onSubmit: (e: FormEvent) => Promise<void>;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  setFile: (file: File | null) => void; // Change to setFile instead of setFiles
  name: string;
  email: string;
  message: string;
}

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, autoComplete }) => (
  <div>
    <label className="label font-semibold">
      <span className="pb-2 label-text">{label}</span>
    </label>
    <input
      className="input w-full input-bordered input-primary bg-transparent border-2 border-white px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={label}
      autoComplete={autoComplete}
      required
    />
  </div>
);

const Form: React.FC<FormProps> = ({ onSubmit, setName, setEmail, setMessage, setFile, name, email, message }) => (
  <form onSubmit={onSubmit} className="flex flex-col gap-8">
    <Input label="Name" type="text" value={name} onChange={setName} autoComplete="name" />
    <Input label="Email" type="email" value={email} onChange={setEmail} autoComplete="email" />
    <div>
      <label className="label font-semibold">
        <span className="label-text">Message</span>
      </label>
      <textarea
        className="textarea w-full textarea-primary bg-transparent border-2 border-white px-3 py-2 min-h-24 sm:min-h-32 md:min-h-40 lg:min-h-64"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        minLength={20}
        placeholder="Hello, I'm interested in discussing..."
        required
      ></textarea>
    </div>
    <input
      className="file:bg-primary-100 file:rounded-md file:font-medium file:px-4"
      type="file"
      onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} // Set only the first file
    />
    <button
      className="px-6 inline-block py-3 w-full sm:w-fit rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 hover:bg-slate-200 text-white text-2xl font-medium hover:opacity-95"
      type="submit"
    >
      Submit
    </button>
  </form>
);

const ContactForm: React.FC = () => {
  const [isSubmitted, setSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [file, setFile] = useState<File | null>(null); // Change to file instead of files

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    if (file) {
      formData.append('file', file); // Append only the first file
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (res.status === 200) {
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error('Err', err);
    }
  }

  if (isSubmitted) {
    return <SubmittedMessage />;
  }

  const formProps = { onSubmit, setName, name, email, setEmail, message, setMessage, setFile };

  return (
    <section id="contact">
      <TwoColumns>
        <LeftColumn />
        <Form {...formProps} />
      </TwoColumns>
    </section>
  );
}

export default ContactForm;
