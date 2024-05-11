
const AccordionElement = ({title, onClick, style, isOpen, text}) => {

    return(
        <div className="faq">
            <div className="question">
                <div className="question-wrap">
                    <p>{title}</p>
                </div>
                <button className="question-btn" onClick={onClick} style={style}>{">"}</button>
            </div>
            {isOpen &&  <div className="anwser">
                <p>{text}</p>
            </div>}
        </div>
    )
    
}

export default AccordionElement