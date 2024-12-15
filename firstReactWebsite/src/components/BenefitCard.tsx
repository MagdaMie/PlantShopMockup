import { ElementType } from "react";

type BenefitCardProps = {
  title: string;
  content: string;
  icon: ElementType;
};

const BenefitCard = ({ title, content, icon: Icon }: BenefitCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center m-8 lg:flex-row lg:m-0">
      <div className="text-7xl text-customGreen-light m-4">
        <Icon />
      </div>

      <div className="flex flex-col items-center justify-center lg:block">
        <h2 className="text-2xl">{title}</h2>
        <p className="font-oxygen text-center lg:text-start">{content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
