import InstagramImg from "./InstagramImg";

const InstagramDisplayFooter = () => {
  const pictures = ["/ig1.png", "/ig2.png", "/ig3.png"]

  return (
    <div>
      <h2 className="font-crimson text-xlg mb-4">Followo us on instagram</h2>
      <div className="flex  gap-2">
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
