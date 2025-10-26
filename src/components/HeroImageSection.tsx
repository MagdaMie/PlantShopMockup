import HeroImg from "../assets/hero.jpg";
import ResponsiveImg from "./ResponsiveImg";

const HeroImageSection = () => {
  return (
    <div className="flex items-center justify-center lg:w-1/2">
      <ResponsiveImg
        src={HeroImg}
        alt={"Hero Img"}
        sizes={[350, 400, 600]}
        formats={["webp", "jpg"]}
      />
    </div>
  );
};

export default HeroImageSection;
