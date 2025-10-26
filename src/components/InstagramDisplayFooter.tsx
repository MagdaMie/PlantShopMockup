import { instagramImages } from "../data/instagramData";
import ResponsiveImg from "./ResponsiveImg";

const InstagramDisplayFooter = () => {
  return (
    <div>
      <h2 className="text-xlg mb-4 text-center lg:text-left">
        Followo us on instagram
      </h2>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
        {instagramImages.map((picture) => {
          return (
            <ResponsiveImg
              src={picture}
              key={picture}
              alt={"instagram picure"}
              sizes={[150, 250]}
              formats={["webp", "jpg"]}
              className="h:[250px] w-[250px] lg:h-[150px] lg:w-[150px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default InstagramDisplayFooter;
