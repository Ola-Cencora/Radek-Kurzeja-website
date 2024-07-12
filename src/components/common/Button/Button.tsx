import styles from "./Button.module.scss";

interface ButtonProps {
  content: string | React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  ariaLabel,
  variant,
  type,
}) => {
  let className = styles.button;
  if (variant === "navigation_btn") className = styles.button___navigation;

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
