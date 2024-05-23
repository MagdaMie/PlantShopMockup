import InstagramDisplayFooter from "./InstagramDisplayFooter"
import Nav from "./Nav"
import ContactFooter from "./ContactFooter"

const Footer = () => {
    return(
        <div className="footer">
            <InstagramDisplayFooter />
            <Nav 
            displayNav={'nav-v'}
            displayNavElement={'nav-item-v'}/>
            <ContactFooter />
        </div>
    )
}

export default Footer