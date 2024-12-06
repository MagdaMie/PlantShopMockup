import { ElementType } from "react";

type BenefitCardProps = {
  title: string;
  content: string;
  icon: ElementType;
};

const BenefitCard = ({ title, content, icon: Icon }: BenefitCardProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-7xl text-customGreen-light m-4">
        <Icon />
      </div>

      <div>
        <h2 className="font-crimson text-[1.75rem]">{title}</h2>
        <p className="font-oxygen text-[1rem]">{content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
