export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | undefined;
  disabled?: boolean;
}
