type PageTitleProps = {
  title: string;
  paragraph?: string;
};

const PageTitle = ({ title, paragraph }: PageTitleProps) => {
  return(
    <div className="flex-col items-center justify-center mb-14">
          <h3 className=" text-center text-5xl ">{title}</h3>
          <p className="text-center mt-6">{paragraph}</p>
    </div>
  
  ) 
};

export default PageTitle;
