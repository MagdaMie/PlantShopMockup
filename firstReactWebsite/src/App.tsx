import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import useCartStore from "./stores/cartStore";
import products from "./data/products";
import { Product } from "./types/types";
import ScrollToTop from "./components/ScrollToTop";

const Header = lazy(() => import("./pages/Header"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Home = lazy(() => import("./pages/Home"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const Footer = lazy(() => import("./pages/Footer"));

function App() {
  const cartProducts = useCartStore((state) => state.cartProducts);
  const addPlant = useCartStore((state) => state.addPlant);
  const removePlant = useCartStore((state) => state.removePlant);
  const decrementCounter = useCartStore((state) => state.decrementCounter);

  let numberOfCartProducts = 0;
  let totalPrice = 0;

  cartProducts.forEach((plant: Product) => {
    numberOfCartProducts += plant.counter;
    totalPrice += plant.counter * plant.price;
  });

  const shippingCost = totalPrice > 150 ? 0 : 10 * numberOfCartProducts;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Header numberOfCartProducts={numberOfCartProducts} />
      </Suspense>
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/shop"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShopPage products={products} addPlant={addPlant} />
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
      </main>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
