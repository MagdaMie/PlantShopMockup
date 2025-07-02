import PageTitle from "./PageTitle";
import FAQbanerImg from "../assets/FAQbaner.png";

const FaqBaner = () => {
  return (
    <div
      className="-z-10 h-[400px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FAQbanerImg})` }}
    >
      <div className="inset-0 bg-darkGray bg-opacity-30"></div>
      <div className="flex h-[400px] items-center justify-center">
        <PageTitle title={"Frequently Asked Questions"} />
      </div>
    </div>
  );
};

export default FaqBaner;
