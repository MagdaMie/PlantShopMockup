
type TextContentProps = {
  title: string;
  paragraph?: string;
}

const TextContent = ({ title, paragraph }: TextContentProps) => {
  return (
    <div className="flex flex-col m-8">
      <h3 className="my-4 font-crimson uppercase text-[2rem] text-center">
        {title}
      </h3>
      <p className="my-4 font-oxygen text-[1rem] text-center">{paragraph}</p>
    </div>
  );
};

export default TextContent;
