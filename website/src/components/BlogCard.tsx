import { Post } from "../types/types";

const BlogCard = ({ title, content, author, date, authorImg, postImg } :Post) => {
  return (
    <div className="bg-customGreen-dark mx-4 rounded-lg">
      <div className="m-6 flex flex-col h-full lg:m-1">
        <div className="mt-6 lg:mt-0">
          <img className="w-[400px] rounded-lg " src={postImg} alt="" />
        </div>
        <div className="my-3 mx-2">
          <h3 className="uppercase text-lg pb-3 break-words">{title}</h3>
          <p className="font-oxygen font-thin text-sm ">{content}</p>
        </div>
        <div className="flex justify-between items-center mt-auto pb-2 m-2">
          <div className="flex items-center">
          <img
            className="w-[50px] h-[50px] rounded-full "
            src={authorImg}
            alt="author's photo"
          />
          <p className="px-2">{author}</p>
          </div>
       
          <p >{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
