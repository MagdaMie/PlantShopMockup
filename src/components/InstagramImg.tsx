type InstagramImgProps = {
  picture: string;
};
const InstagramImg = ({ picture }: InstagramImgProps) => {
  return (
    <img className="w-[250px] h:[2500px] lg:w-[150px] lg:h-[150px]" src={picture} alt="instagram-img" />
  );
};

export default InstagramImg;
