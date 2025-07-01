import PageTitle from "./PageTitle";
import FAQbanerImg from "../assets/FAQbaner.png"

const FaqBaner = () => {
  return (
    <div
      className="h-[400px] bg-no-repeat bg-cover bg-center -z-10 "
      style={{ backgroundImage: `url(${FAQbanerImg})` }}
    >
      <div className=" inset-0 bg-darkGray bg-opacity-30"></div>
      <div className="h-[400px] flex justify-center items-center ">
        <PageTitle title={"Frequently Asked Questions"} />
      </div>
    </div>
  );
};

export default FaqBaner;
