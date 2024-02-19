import React, { ReactNode } from "react";

interface DescriptionColumnProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const DescriptionColumn: React.FC<DescriptionColumnProps> = ({
  title,
  description,
  children,
}) => {
  const titleClass = "text-5xl font-bold mb-4";
  const descriptionClass = "text-secondary-200 text-2xl leading-normal";

  return (
    <>
      <div>
        <h2 className={titleClass}>{title}</h2>
        <p className={descriptionClass}>{description}</p>
      </div>
      {children && <div>{children}</div>}
    </>
  );
};

export default DescriptionColumn;
