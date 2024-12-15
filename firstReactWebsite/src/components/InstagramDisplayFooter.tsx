import InstagramImg from "./InstagramImg";

const InstagramDisplayFooter = () => {
  const pictures = ["/ig1.png", "/ig2.png", "/ig3.png"]

  return (
    <div>
      <h2 className="mb-4 text-xlg  text-center lg:text-left">Followo us on instagram</h2>
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
       {pictures.map(picture => {
        return <InstagramImg 
        picture={picture}
        key={picture}
        />
       })}
      </div>
    </div>
  );
};

export default InstagramDisplayFooter;
