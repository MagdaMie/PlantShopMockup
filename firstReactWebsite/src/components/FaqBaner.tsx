import TextContent from "./TextContent";

const FaqBaner = () => {
  return (
    <div className="faq-baner">
      <div className="baner-bg">
        <TextContent
          title={"frequently asked questions"}
          paragraph={
            "If you have a question that we don't anwser below, pleas fell free to contact us."
          }
        />
      </div>
    </div>
  );
};

export default FaqBaner;
