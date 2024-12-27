import PageTitle from "./PageTitle";

const FaqBaner = () => {
  return (
    <div
      className="h-[400px] bg-no-repeat bg-cover bg-center -z-10 "
      style={{ backgroundImage: `url("/FAQbaner.png")` }}
    >
      <div className=" inset-0 bg-darkGray bg-opacity-30"></div>
      <div className="h-[400px] flex justify-center items-center ">
        <PageTitle title={"Frequently Asked Questions"} />
      </div>
    </div>
  );
};

export default FaqBaner;
