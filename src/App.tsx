import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import useCartStore from "./stores/cartStore";
import products from "./data/products";
import ScrollToTop from "./components/ScrollToTop";
import { useMemo } from "react";
import SuspenseWrapper from "./components/SuspenseWrapper";
import { PATHS } from "./data/navigation";

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

  const { numberOfCartProducts, totalPrice } = useMemo(() => {
    return cartProducts.reduce(
      (acc, plant) => {
        acc.numberOfCartProducts += plant.counter;
        acc.totalPrice += plant.counter * plant.price;
        return acc;
      },
      { numberOfCartProducts: 0, totalPrice: 0 }
    );
  }, [cartProducts]);

  const SHIPPING_THRESHOLD = 150;
  const FREE_SHIPPING_COST = 0;
  const SHIPPING_COST_BASE = 10;
  const shippingCost =
    totalPrice > SHIPPING_THRESHOLD
      ? FREE_SHIPPING_COST
      : SHIPPING_COST_BASE * numberOfCartProducts;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <SuspenseWrapper>
        <Header numberOfCartProducts={numberOfCartProducts} />
      </SuspenseWrapper>
      <main className="flex-1">
        <Routes>
          <Route
            path={PATHS.HOME}
            element={
              <SuspenseWrapper>
                <Home />
              </SuspenseWrapper>
            }
          />

          <Route
            path={PATHS.SHOP}
            element={
              <SuspenseWrapper>
                <ShopPage products={products} addPlant={addPlant} />
              </SuspenseWrapper>
            }
          />

          <Route
            path={PATHS.CONTACT}
            element={
              <SuspenseWrapper>
                <ContactPage />
              </SuspenseWrapper>
            }
          />

          <Route
            path={PATHS.FAQ}
            element={
              <SuspenseWrapper>
                <FaqPage />
              </SuspenseWrapper>
            }
          />

          <Route
            path={PATHS.PRODUCT}
            element={
              <SuspenseWrapper>
                <ProductPage addPlant={addPlant} />
              </SuspenseWrapper>
            }
          />

          <Route
            path={PATHS.CART}
            element={
              <SuspenseWrapper>
                <CartPage
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                  shippingCost={shippingCost}
                  removePlant={removePlant}
                  addPlant={addPlant}
                  decrementCounter={decrementCounter}
                />
              </SuspenseWrapper>
            }
          />
        </Routes>
      </main>
      <SuspenseWrapper>
        <Footer />
      </SuspenseWrapper>
    </div>
  );
}

export default App;
