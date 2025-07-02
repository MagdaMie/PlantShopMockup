import Button from "./Button";
import NavLink from "./NavLink";
import PageTitle from "./PageTitle";
import BanerImg from "../assets/Baner1.jpg";

const Baner = () => {
  return (
    <div
      className="flex h-[500px] w-full flex-col justify-center bg-cover bg-center bg-no-repeat"
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
