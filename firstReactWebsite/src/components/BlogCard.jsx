const BlogCard = ({ title, body, author, date, authorImg, postImg }) => {
  return (
    <div className="mx-[1rem] flex flex-col">
      <div className="flex justify-center">
        <img className="w-[350px] rounded-lg " src={postImg} alt="" />
      </div>
      <div className="my-3">
        <h3 className="uppercase text-lg  ">{title}</h3>
        <p className="font-oxygen font-thin ">{body}</p>
      </div>
      <div className="flex items-center   ">
        <img className="w-[50px] h-[50px] rounded-full " src={authorImg} alt="" />
        <p className="px-3">{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
