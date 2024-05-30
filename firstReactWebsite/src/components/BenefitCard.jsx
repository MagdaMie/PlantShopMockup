const BenefitCard = ({ title, content, icon }) => {
  return (
    <div className="benefit-card">
      <img src={icon} alt="" />
      <div className="benefit-wrap">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
