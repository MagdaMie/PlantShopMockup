import BenefitCard from "./BenefitCard";

const Benefits = () => {
  const benefits = [
    {
      title: "Fast and Free Delivery",
      content: "Free delivery for all orders above $150",
      icon: "/icon1.png",
      id: 1,
    },
    {
      title: "Trusted by Thousands",
      content: "Over 2000 reviews with a 5-star rating",
      icon: "/icon2.png",
      id: 2,
    },
    {
      title: "Loyalty Gifts",
      content: "Disccount cupons for our loyal customers",
      icon: "/icon3.png",
      id: 1,
    },
    {
      title: "Money Back Guarantee",
      content: "We return money withing 30 days",
      icon: "/icon4.png",
      id: 1,
    },
  ];
  return (
    <div className="benefits">
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
