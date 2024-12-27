
type TextContentProps = {
  title: string;
  paragraph?: string;
}

const TextContent = ({ title, paragraph }: TextContentProps) => {
  return (
    <div className="flex flex-col m-2 lg:m-8">
      <h3 className="my-4 uppercase text-3xl text-center">
        {title}
      </h3>
      <p className="my-4 font-oxygen text-center">{paragraph}</p>
    </div>
  );
};

export default TextContent;
