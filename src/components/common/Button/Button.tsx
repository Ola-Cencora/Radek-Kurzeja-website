import styles from "./Button.module.scss";

interface ButtonProps {
  content: string | React.ReactNode;
  onClick: () => void;
  ariaLabel?: string;
  variant: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  ariaLabel,
  variant,
}) => {
  let className = styles.button;
  if (variant === "navigation_btn") className = styles.button___navigation;

  return (
    <button onClick={onClick} className={className} aria-label={ariaLabel}>
      {content}
    </button>
  );
};

export default Button;
