import HeroImg from "../assets/hero.jpg";

const HeroImageSection = () => {
  return (
    <div className="flex items-center justify-center lg:w-1/2">
      <img src={HeroImg} alt="" />
    </div>
  );
};

export default HeroImageSection;
