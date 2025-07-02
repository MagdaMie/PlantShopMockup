import { ElementType } from "react";

type BenefitCardProps = {
  title: string;
  content: string;
  icon: ElementType;
};

const BenefitCard = ({ title, content, icon: Icon }: BenefitCardProps) => {
  return (
    <div className="m-8 flex flex-col items-center justify-center lg:m-0 lg:flex-row">
      <div className="m-4 text-7xl text-customGreen-light">
        <Icon />
      </div>

      <div className="flex flex-col items-center justify-center lg:block">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-center font-oxygen lg:text-start">{content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
