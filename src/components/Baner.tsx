import Button from "./Button";
import NavLink from "./NavLink";
import PageTitle from "./PageTitle";
import BanerImg from "../assets/Baner1.jpg"

const Baner = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
      style={{ backgroundImage: `url(${BanerImg})` }}
    >
      <PageTitle
        title={"Lorem ipsum dolor sit"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi  reprehenderit labore natus molestiae culpa."
        }
      />
      <NavLink to={"/shop"} className={"flex justify-center"}>
        <Button content={"See our plants"} />
      </NavLink>
    </div>
  );
};
export default Baner;
