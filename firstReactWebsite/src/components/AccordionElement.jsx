
const AccordionElement = ({title, onClick, style, isOpen, text}) => {

    return(
        <div className="wrap">
            <div className="wrap-main">
                <div className="main">
                    <p>{title}</p>
                </div>
                <button onClick={onClick} style={style}>{"<"}</button>
            </div>
                 {isOpen &&  <div className="more-text">
                    <p>{text}</p>
                    <p>just to check the git issue</p>
                 </div>}
        </div>
    )
    
}

export default AccordionElement