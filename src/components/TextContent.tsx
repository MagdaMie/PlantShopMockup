type TextContentProps = {
  title: string;
  paragraph?: string;
};

const TextContent = ({ title, paragraph }: TextContentProps) => {
  return (
    <div className="m-2 flex flex-col lg:m-8">
      <h3 className="my-4 text-center text-3xl uppercase">{title}</h3>
      <p className="my-4 text-center font-oxygen">{paragraph}</p>
    </div>
  );
};

export default TextContent;
