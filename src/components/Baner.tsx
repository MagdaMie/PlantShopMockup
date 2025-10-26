import Button from "./Button";
import NavLink from "./NavLink";
import PageTitle from "./PageTitle";
import ResponsiveImg from "./ResponsiveImg";

const Baner = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col justify-center">
      <ResponsiveImg
        src="../assets/Baner1.jpg"
        alt="Baner"
        sizes={[1280, 800, 375]}
        formats={["webp", "jpg"]}
        className="absolute left-0 top-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
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
    </div>
  );
};
export default Baner;
