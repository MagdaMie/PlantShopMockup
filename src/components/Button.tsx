type ButtonProps = {
  content: string;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
};

const Button = ({ content, onClick, disable, type }: ButtonProps) => {
  return (
    <button
      className="rounded-3xl bg-customGreen-dark px-[18px] py-2 text-center hover:bg-customGreen-default"
      onClick={onClick}
      disabled={disable}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
