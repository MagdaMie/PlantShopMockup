import ResponsiveImg from "./ResponsiveImg";

const ContactBaner = () => {
  return (
    <div className="relative flex h-[200px] min-h-[calc(100vh-200px)] flex-col items-center justify-center md:flex-1 md:flex-row">
      <ResponsiveImg
        src="../assets/siteBaner.png"
        alt="Contact Baner"
        sizes={[500, 400, 300]}
        formats={["webp", "jpg"]}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="contact-page-header">Get in</h3>
        <h3 className="contact-page-header"> touch</h3>
      </div>
    </div>
  );
};

export default ContactBaner;
