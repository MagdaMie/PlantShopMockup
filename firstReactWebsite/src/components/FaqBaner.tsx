import TextContent from "./TextContent";

const FaqBaner = () => {
  return (
    
      <div
        className=" relative -top-[80px] h-[500px]  bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url("/FAQbaner.png")` }}
      >
        <div className="absolute inset-0 bg-[#242424] bg-opacity-30"></div>
        <div className="relative top-[170px]">
        
          <TextContent title={"frequently asked questions"} />
        </div>
      </div>
 
  );
};

export default FaqBaner;
