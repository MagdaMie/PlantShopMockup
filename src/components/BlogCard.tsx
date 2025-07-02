import { Post } from "../types/types";

const BlogCard = ({
  title,
  content,
  author,
  date,
  authorImg,
  postImg,
}: Post) => {
  return (
    <div className="mx-4 rounded-lg bg-customGreen-dark">
      <div className="m-6 flex h-full flex-col lg:m-1">
        <div className="mt-6 lg:mt-0">
          <img className="w-[400px] rounded-lg" src={postImg} alt="" />
        </div>
        <div className="mx-2 my-3">
          <h3 className="break-words pb-3 text-lg uppercase">{title}</h3>
          <p className="font-oxygen text-sm font-thin">{content}</p>
        </div>
        <div className="m-2 mt-auto flex items-center justify-between pb-2">
          <div className="flex items-center">
            <img
              className="h-[50px] w-[50px] rounded-full"
              src={authorImg}
              alt="author's photo"
            />
            <p className="px-2">{author}</p>
          </div>

          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
