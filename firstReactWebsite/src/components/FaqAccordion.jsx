import AccordionElement from "./AccordionElement"
import { useState } from "react"

const FaqAccordion = () => {
    const faqs = [
        {
          mainText: "What is your returns policy?",
          moreText: "We guarantee our plants for a period of 10 days after delivery. ",
          id:"1"
        },
        {
          mainText: "Where do you get your plants from?",
          moreText: "We source out amazing stock from all over the world, including the USA, Thailand, and The Netherlands.",
          id:"2"
        },
        {
          mainText: "Why does my plant look diffrent to the one on your side?",
          moreText: "As with all living things, plants are unique and natural variations can occur from one to the next. The appearance of the plant on our website may differ slightly to the one delivered. This is because each plant is unique and their growth is seasonal.",
          id:"3"
        },
        {
          mainText: "When will my order be delivered?",
          moreText: "We’ve updated our processes so that we can deliver your order to you as quickly as possible. Please note: Your order might arrive in multiple deliveries depending on the item.Items shipped separately include bedding, bulbs, compost, selected pots, seeds and items shipped directly from our trusted suppliers. All other items will be grouped and sent out to you within the longest lead time.Please refer to your order confirmation email for dispatch lead times.",
          id:"4"
        },
        {
          mainText: "What do I do if I’m not happy with the quality of my plant or item?",
          moreText: "If you’re unhappy with the quality of any of the items you’ve received, please email your concerns to customerservices@dummy.com along with supporting photos and we’ll get back to you.",
          id:"5"
        },    
        {
        mainText: "How do you ship your plants?",
        moreText: "We ship in double walled strong cardboard boxes, with air cushion packages to keep the plants as safe as possible. Plants are shipped bare root in a sealed bag.",
        id:"6"
        },    
        {
        mainText: "What payment methods do you accept?",
        moreText: "We accept PayPal and credit/debit cards.",
        id:"7"
        },
       ]
  
       const[currentOpenedElements, setCurrentOpenedElements] = useState([])
  
       const openElement = (id) => {
        setCurrentOpenedElements( prevCurrentOppnedElements => {
            if(prevCurrentOppnedElements.includes(id)) {
               return prevCurrentOppnedElements.filter(currentOppnedElement => currentOppnedElement !== id)
            } else {
               return [...currentOpenedElements, id]
            }
        })   
        } 
       

    return(
        <div className="faq-accordion">
         {faqs.map(faq => {
            const isOpen = currentOpenedElements.includes(faq.id)
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
        </div>
       
    )

}

export default FaqAccordion