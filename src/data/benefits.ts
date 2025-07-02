import { FaMoneyBillWave } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaGift } from "react-icons/fa6";
import { FaTruckArrowRight } from "react-icons/fa6";
import { Benefit } from "../types/types";

const benefits: Benefit[] = [
  {
    title: "Fast and Free Delivery",
    content: "Free delivery for all orders above $150",
    icon: FaTruckArrowRight,
    id: 1,
  },
  {
    title: "Trusted by Thousands",
    content: "Over 2000 reviews with a 5-star rating",
    icon: MdReviews,
    id: 2,
  },
  {
    title: "Loyalty Gifts",
    content: "Disccount cupons for our loyal customers",
    icon: FaGift,
    id: 3,
  },
  {
    title: "Money Back Guarantee",
    content: "We return money withing 30 days",
    icon: FaMoneyBillWave,
    id: 4,
  },
];

export default benefits;
