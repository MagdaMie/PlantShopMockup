import AccordionElement from "./AccordionElement";
import { useState } from "react";
import faqs from "../data/faq";

const FaqAccordion = () => {
  

  const [currentOpenedElements, setCurrentOpenedElements] = useState([]);

  const openElement = (id) => {
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
    <div className="faq-accordion">
      {faqs.map((faq) => {
        const isOpen = currentOpenedElements.includes(faq.id);
        return (
          <AccordionElement
            title={faq.mainText}
            text={faq.moreText}
            id={faq.id}
            key={faq.id}
            onClick={() => {
              openElement(faq.id);
            }}
            isOpen={isOpen}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        );
      })}
    </div>
  );
};

export default FaqAccordion;
