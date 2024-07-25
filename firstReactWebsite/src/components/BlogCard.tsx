import { Post } from "../types/types";

const BlogCard = ({ title, content, author, date, authorImg, postImg } :Post) => {
  return (
    <div className="bg-customGreen-dark mx-[1rem] rounded-lg">
      <div className="m-[0.25rem] flex flex-col h-full ">
        <div className="flex justify-center ">
          <img className="w-[400px] rounded-lg " src={postImg} alt="" />
        </div>
        <div className="my-3 mx-2">
          <h3 className="uppercase text-lg pb-3 break-words">{title}</h3>
          <p className="font-oxygen font-thin text-sm ">{content}</p>
        </div>
        <div className="flex items-center  flex-wrap mt-auto pb-2 m-2">
          <img
            className="w-[50px] h-[50px] rounded-full "
            src={authorImg}
            alt=""
          />
          <p className="px-3">{author}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
