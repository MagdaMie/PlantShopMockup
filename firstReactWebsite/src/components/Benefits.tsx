import BenefitCard from "./BenefitCard";
import benefits from "../data/benefits";

const Benefits = () => {
  return (
    <div className="w-full h-[500px] bg-customGreen-very-dark grid grid-cols-2 grid-rows-2">
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
