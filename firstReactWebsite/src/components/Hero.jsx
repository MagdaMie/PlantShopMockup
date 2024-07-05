import TextContent from "./TextContent";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="flex my-[4rem] mx-[2rem]">
      <div className="w-1/2 flex justify-center items-center ">
        <HeroImg src={"/hero.jpg"} />
      </div>
      <div className="w-1/2 flex items-center">
        <TextContent
          title={"get to know us"}
          paragraph={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ipsa iusto sint pariatur fuga tenetur! Placeat fugiat sapiente consequatur blanditiis iure ratione? Excepturi natus ut quidem,architecto pariatur laboriosam, modi repellendus minus, molestiae deserunt ipsam doloremque praesentium placeat dolore ipsa quo quod odit voluptatem necessitatibus! Ipsa repellat iste quisquam porro. repellendus minus, molestiae deserunt ipsam doloremque praesentium placeat dolore ipsa quo quod odit voluptatem necessitatibus! Ipsa repellat iste quisquam porro."
          }
        />
      </div>
    </div>
  );
};

export default Hero;
