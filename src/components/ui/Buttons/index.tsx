"use client";
import { cn } from "@/lib/utils";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-[10px] px-[20px] rounded-full purplelinear text-white hover:scale-x-110 transition-all duration-300",
        className
      )}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
