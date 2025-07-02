type PageTitleProps = {
  title: string;
  paragraph?: string;
};

const PageTitle = ({ title, paragraph }: PageTitleProps) => {
  return (
    <div className="mb-14 flex-col items-center justify-center">
      <h3 className="text-center text-5xl">{title}</h3>
      <p className="mt-6 text-center">{paragraph}</p>
    </div>
  );
};

export default PageTitle;
