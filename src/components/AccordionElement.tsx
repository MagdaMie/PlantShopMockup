import { Question } from "../types/types";
import { CSSProperties } from "react";
import { X, ChevronDown } from "lucide-react";

type AccordionElementProps = Question & {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const AccordionElement = ({
  question,
  anwser,
  onClick,
  isOpen,
}: AccordionElementProps) => {
  return (
    <div className="mx-auto my-4 w-5/6 md:w-4/6">
      <div
        className="flex flex-col justify-between rounded-md border border-white p-3 md:flex-row md:p-6"
        onClick={onClick}
      >
        <p className="text-lg">{question}</p>
        <button className="font-oxygen text-lg">
          {isOpen ? <X size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mt-3 rounded-md bg-customGreen-light p-6 text-lg text-darkGray">
          <p>{anwser}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionElement;
