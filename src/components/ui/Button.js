function Button(props) {
  const {
    children,
    className,
    onClick,
    size = "default",
    variant = "default",
  } = props;
  return (
    <div
      className={`button button--${size} button--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
