import Button from "./Button";
import NavLink from "./NavLink"
import TextContent from "./TextContent";

const Baner = () => {
  return (
    <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat flex flex-col justify-center" style={{ backgroundImage: "url('/Baner1.jpg')" }} >
      
        <TextContent 
        title={'Lorem ipsum dolor sit'}
        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi  reprehenderit labore natus molestiae culpa.'}/>
        <NavLink to={"/shop"} className={'flex justify-center'}>
          <Button content={"See our plants"} />
        </NavLink>
    </div>
  );
};
export default Baner;
