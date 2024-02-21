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
  return (
    <>
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">{title}</h2>
        <p className="text-secondary-100 text-xl lg:text-2xl leading-normal">{description}</p>
      </div>
      {children && <div>{children}</div>}
    </>
  );
};

export default DescriptionColumn;
