import PageTitle from "./PageTitle";
import ResponsiveImg from "./ResponsiveImg";

const FaqBaner = () => {
  return (
    <div className="relative h-[400px]">
      <ResponsiveImg
        src="../assets/FAQbaner.png"
        alt="FAQ Baner"
        sizes={[1280, 800, 375]}
        formats={["webp", "jpg"]}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-darkGray bg-opacity-30"></div>
      <div className="relative z-10 flex h-[400px] items-center justify-center">
        <PageTitle title={"Frequently Asked Questions"} />
      </div>
    </div>
  );
};

export default FaqBaner;
