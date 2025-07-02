type InstagramImgProps = {
  picture: string;
};
const InstagramImg = ({ picture }: InstagramImgProps) => {
  return (
    <img
      className="h:[2500px] w-[250px] lg:h-[150px] lg:w-[150px]"
      src={picture}
      alt="instagram-img"
    />
  );
};

export default InstagramImg;
