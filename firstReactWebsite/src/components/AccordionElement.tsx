import { Question} from "../types/types";
import { CSSProperties } from 'react';

type AccordionElementProps = Question & {
style: CSSProperties;
isOpen: boolean;
onClick: React.MouseEventHandler<HTMLDivElement> ;
}

const AccordionElement = ({ question, anwser, onClick, style, isOpen }: AccordionElementProps) => {
  return (
    <div className="faq">
      <div className="question" onClick={onClick}>
        <div className="question-wrap">
          <p>{question}</p>
        </div>
        <button className="question-btn" style={style}>
          {"V"}
        </button>
      </div>
      {isOpen && (
        <div className="anwser">
          <p>{anwser}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionElement;
