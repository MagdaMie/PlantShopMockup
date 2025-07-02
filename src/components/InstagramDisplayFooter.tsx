import InstagramImg from "./InstagramImg";
import { instagramImages } from "../data/instagramData";

const InstagramDisplayFooter = () => {
  return (
    <div>
      <h2 className="text-xlg mb-4 text-center lg:text-left">
        Followo us on instagram
      </h2>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
        {instagramImages.map((picture) => {
          return <InstagramImg picture={picture} key={picture} />;
        })}
      </div>
    </div>
  );
};

export default InstagramDisplayFooter;
