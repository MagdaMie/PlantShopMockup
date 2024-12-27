import Button from "./Button";
import NavLink from "./NavLink";

const ContactFooter = () => {
  const content = "Contact Us";
  return (
    <div>
      <div className="my-4 text-center">
        <p>487 Amelie Court</p>
        <p>Lake Gunnarside</p>
        <p>07888</p>
      </div>
      <NavLink to={"/contact"} className={"flex justify-center"}>
        <Button content={content} />
      </NavLink>
    </div>
  );
};

export default ContactFooter;
