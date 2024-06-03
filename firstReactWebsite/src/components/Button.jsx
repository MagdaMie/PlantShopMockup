const Button = ({ content, onClick, disable }) => {
  return (
    <button className="bg-customGreen-dark px-[18px] py-2 rounded-3xl hover:bg-customGreen-default" onClick={onClick} disabled={disable}>
      {content}
    </button>
  );
};

export default Button;
