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
        className,
        "bg-purple-900 py-[10px] px-[20px] rounded-full"
      )}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
