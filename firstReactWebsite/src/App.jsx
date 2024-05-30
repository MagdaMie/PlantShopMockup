import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import useCartStore from "./stores/cartStore";
import products from "./data/products";

const Header = lazy(() => import("./pages/Header"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./components/Products"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Footer = lazy(() => import("./pages/Footer"));

function App() {
  const { cartProducts, addPlant, removePlant, decrementCounter } =
    useCartStore();

  let numberOfCartProducts = 0;
  cartProducts.forEach((plant) => {
    numberOfCartProducts += plant.counter;
  });

  let totalPrice = 0;
  cartProducts.forEach((plant) => {
    totalPrice += plant.counter * plant.price;
  });

  const shippingCost = totalPrice > 150 ? 0 : 10 * numberOfCartProducts;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header numberOfCartProducts={numberOfCartProducts} />
      </Suspense>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Products products={products} addPlant={addPlant} />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          }
        />

        <Route
          path="/FAQ"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FaqPage />
            </Suspense>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProductPage addPlant={addPlant} />
            </Suspense>
          }
        />

        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CartPage
                cartProducts={cartProducts}
                totalPrice={totalPrice}
                shippingCost={shippingCost}
                removePlant={removePlant}
                addPlant={addPlant}
                decrementCounter={decrementCounter}
              />
            </Suspense>
          }
        />
      </Routes>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
