"use client";
import { cn } from "@/lib/utils";
import { ButtonProps } from "./interface";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
  disabled,
}) => {
  return <button onClick={onclick}></button>;
};

export default Button;
