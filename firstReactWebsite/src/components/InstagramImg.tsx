type InstagramImgProps = {
  picture: string;
};
const InstagramImg = ({ picture }: InstagramImgProps) => {
  return (
    <img className="w-[150px] h-[150px]" src={picture} alt="instagram-img" />
  );
};

export default InstagramImg;
