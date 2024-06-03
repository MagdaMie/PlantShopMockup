const BanerText = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col">
      <h3 className="m-4 font-crimson uppercase text-[2rem] text-center">
        {title}
      </h3>
      <p className="m-4 font-oxygen text-[1rem] text-center">{paragraph}</p>
    </div>
  );
};

export default BanerText;
