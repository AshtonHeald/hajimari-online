import React from "react";

interface ButtonProps {
  src: string;
  className?: string;
  subClassName?: string;
  imgClassName?: string;
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({
  src,
  className,
  subClassName,
  imgClassName,
  text,
  href,
}) => {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center p-[3px] mb-2 overflow-hidden text-sm font-medium rounded-lg group   focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 ${className}`}
    >
      <span
        className={`relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 flex align-items-center justify-center text-lg gap-1 ${subClassName}`}
      >
        <img className={`w-6 ${imgClassName}`} src={src} alt="chrome-logo" />{" "}
        {text}
      </span>
    </a>
  );
};

export default Button;
