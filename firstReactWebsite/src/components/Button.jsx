const Button = ({ content, onClick, disable }) => {
  return (
    <button className="btn-better" onClick={onClick} disabled={disable}>
      {content}
    </button>
  );
};

export default Button;
