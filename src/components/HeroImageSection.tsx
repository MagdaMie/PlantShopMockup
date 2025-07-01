import HeroImg from "../assets/hero.jpg";

const HeroImageSection = () => {
  return (
    <div className="lg:w-1/2 flex justify-center items-center ">
      <img src={HeroImg} alt="" />
    </div>
  );
};

export default HeroImageSection;
