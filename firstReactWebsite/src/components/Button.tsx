type ButtonProps = {
  content: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ content, onClick, disable }: ButtonProps) => {
  return (
    <button
      className="bg-customGreen-dark px-[18px] py-2 rounded-3xl hover:bg-customGreen-default text-center"
      onClick={onClick}
      disabled={disable}
    >
      {content}
    </button>
  );
};

export default Button;
