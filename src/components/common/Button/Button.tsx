import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  onClick,
  ariaLabel,
  variant,
  disabled,
  type,
}: ButtonProps) => {
  let className = styles.button;
  if (variant === "send_btn") className = styles.button___send;
  if (variant === "navigation_btn") className = styles.button___navigation;

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
