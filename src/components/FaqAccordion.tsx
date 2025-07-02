import AccordionElement from "./AccordionElement";
import { useState } from "react";
import faqs from "../data/faq";

type openElementFunction = (id: number) => void;

const FaqAccordion = () => {
  const [currentOpenedElements, setCurrentOpenedElements] = useState<number[]>(
    []
  );

  const openElement: openElementFunction = (id) => {
    setCurrentOpenedElements((prevCurrentOppnedElements) => {
      if (prevCurrentOppnedElements.includes(id)) {
        return prevCurrentOppnedElements.filter(
          (currentOppnedElement) => currentOppnedElement !== id
        );
      } else {
        return [...currentOpenedElements, id];
      }
    });
  };

  return (
    <div className="mt-[-60px]">
      {faqs.map((faq) => {
        const isOpen = currentOpenedElements.includes(faq.id);
        return (
          <AccordionElement
            question={faq.question}
            anwser={faq.anwser}
            id={faq.id}
            key={faq.id}
            onClick={() => {
              openElement(faq.id);
            }}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

export default FaqAccordion;
