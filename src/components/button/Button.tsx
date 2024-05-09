import React from "react";

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-[200px]  bottom-5  bg-main text-center rounded-2xl py-4 text-white font-bold hover:bg-[#404c64]"
    >
      {children}
    </button>
  );
};

export default Button;
