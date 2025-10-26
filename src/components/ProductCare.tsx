import icon5 from "../assets/icon5.png";

const ProductCare = () => {
  return (
    <div className="flex justify-center gap-2 md:mt-8 lg:justify-start">
      <div className="care-item">
        <img src={icon5} alt="icon" className="care-item-img" />
        <p className="care-item-p">Lorem, ipsum</p>
      </div>
      <div className="care-item">
        <img src={icon5} alt="icon" className="care-item-img" />
        <p className="care-item-p">Lorem, ipsum</p>
      </div>
      <div className="care-item">
        <img src={icon5} alt="icon" className="care-item-img" />
        <p className="care-item-p">Lorem, ipsum</p>
      </div>
      <div className="care-item">
        <img src={icon5} alt="icon" className="care-item-img" />
        <p className="care-item-p">Lorem, ipsum</p>
      </div>
    </div>
  );
};

export default ProductCare;
