import { Link } from "react-router-dom";
import Button from "./Button";

const Baner = () => {
  const button = "See our plants";
  return (
    <div className="baner">
      <div className="baner-container">
        <h3 className="margin">Lorem ipsum dolor sit</h3>
        <p className="margin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
          reprehenderit labore natus molestiae culpa.
        </p>
        <Link to={"/shop"}>
          <Button content={button} />
        </Link>
      </div>
    </div>
  );
};
export default Baner;
