import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <input {...props} className="border p-2 rounded w-full" />;
};

export default Input;
