type ButtonProps = {
  content: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
};

const Button = ({ content, onClick, disable, type }: ButtonProps) => {
  return (
    <button
      className="bg-customGreen-dark px-[18px] py-2 rounded-3xl hover:bg-customGreen-default text-center"
      onClick={onClick}
      disabled={disable}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
