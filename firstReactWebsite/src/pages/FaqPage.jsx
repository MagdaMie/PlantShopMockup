import FaqAccordion from "../components/FaqAccordion";
import FaqBaner from "../components/FaqBaner";

const FaqPage = () => {
  return (
    <>
      <FaqBaner />
      <FaqAccordion />
      <input type="text" className="form-input mt-2 block w-full" />
      <p className="text-shadow-lg">Text with large shadow</p>
    </>
  );
};

export default FaqPage;
