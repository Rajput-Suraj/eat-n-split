function Button({ children, onToggle }) {
  return (
    <button className="button" onClick={onToggle}>
      {children}
    </button>
  );
}

export default Button;
