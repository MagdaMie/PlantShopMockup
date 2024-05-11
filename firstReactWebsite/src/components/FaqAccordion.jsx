import AccordionElement from "./AccordionElement"
import { useState } from "react"

const FaqAccordion = () => {
    const faqs = [
        {
          mainText: "Home",
          moreText: "Nihil magnam voluptatum delectus, exercitationem quibusdam tenetur totam est fuga tempore impedit porro esse, a, repudiandae quidem?",
          id:"1"
        },
        {
          mainText: "About",
          moreText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magnam voluptatum delectus, exercitationem quibusdam tenetur totam",
          id:"2"
        },
        {
          mainText: "Contact",
          moreText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  repudiandae quidem?",
          id:"3"
        }
       ]
  
       const[currentOpenedElement, setCurrentOpenedElement] = useState(null)
  
       const openElement = (id) => {
        setCurrentOpenedElement(prevId => prevId === id ? null : id)
       }

    return(
        <>
         {faqs.map(faq => {
            const isOpen = currentOpenedElement === faq.id
            return <AccordionElement 
            title={faq.mainText}
            text={faq.moreText}
            id={faq.id}
            key={faq.id}
            onClick={() => {
              openElement(faq.id)}
            } 
            isOpen={isOpen}
            style={{transform: isOpen? 'rotate(-90deg)' : 'rotate(90deg)' }} />
        })}
        </>
       
    )

}

export default FaqAccordion