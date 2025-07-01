import { useState } from "react";
import { Product } from "../types/types";
import Products from "../components/Products";

import PageTitle from "../components/PageTitle";
import SortingOptions from "../components/SortingOptions";
import Notification from "../components/Notification";
import { sortArray, SortOption } from "../helpers/sortArray";

type ShopPageProps = {
  products: Product[];
  addPlant: (product: Product) => void;
};

const ShopPage = ({ products, addPlant }: ShopPageProps) => {
  const [sortMethod, setSortMethod] = useState<SortOption>({
    id: "name",
    order: "asc",
  });

  const sortedProducts = sortArray(products, sortMethod.id, sortMethod.order);

  return (
    <>
      <PageTitle title="Our Plants" />
      <div className="flex flex-col justify-start">
        <SortingOptions sortMethod={sortMethod} setSortMethod={setSortMethod} />
        <Products products={sortedProducts} addPlant={addPlant} />
      </div>

      <Notification />
    </>
  );
};

export default ShopPage;
