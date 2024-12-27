import { Question } from "../types/types";
import { CSSProperties } from "react";

type AccordionElementProps = Question & {
  style: CSSProperties;
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const AccordionElement = ({
  question,
  anwser,
  onClick,
  style,
  isOpen,
}: AccordionElementProps) => {
  return (
    <div className="my-4 mx-auto w-5/6 md:w-4/6 ">
      <div
        className="p-3  flex flex-col  justify-between border border-white rounded-md md:flex-row md:p-6"
        onClick={onClick}
      >
        <p className="text-lg">{question}</p>
        <button className="font-oxygen text-lg" style={style}>
          {isOpen? "x" : "v"}
        </button>
      </div>
      {isOpen && (
        <div className="mt-3 p-6 bg-customGreen-light text-darkGray text-lg rounded-md">
          <p>{anwser}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionElement;
