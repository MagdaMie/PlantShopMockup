import BenefitCard from "./BenefitCard";
import benefits from "../data/benefits";

const Benefits = () => {
  return (
    <div className="w-full  bg-customGreen-very-dark py-4 lg:h-[500px] lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:py-0">
      {benefits.map((benefit) => {
        return (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            content={benefit.content}
            icon={benefit.icon}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
