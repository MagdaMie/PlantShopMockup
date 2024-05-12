

const ContactPage = () => {


    return(
        <div className="contact-page">

        <div className="contact-page-left">
            <h3>
                <span>Get in</span>
                <span> touch</span>
            </h3>
        </div>

        <div className="contact-page-right">
            <form>
                <input type="text" placeholder="name" />
                <input type="email" placeholder="e-mail" />
                <textarea name="message" id="message" placeholder="enter your message..."></textarea>
            </form>
        </div>

        </div>
    )
}

export default ContactPage