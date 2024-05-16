import { Route, Routes } from "react-router-dom"
import { Suspense, useState, lazy } from "react"
const Header = lazy(() => import("./components/Header"))

const ProductPage = lazy(() => import("./components/ProductPage"))
const Home = lazy(() => import("./components/Home"))
const Products = lazy(() => import("./components/Products"))
const FaqPage = lazy(() => import("./components/FaqPage"))
const ContactPage = lazy(() => import("./components/ContactPage"))
const CartPage = lazy(() => import("./components/CartPage"))




export const products = [
  { id: 1, name: "Monstera", price: 50, img: "/1.png", counter: 1 },
  { id: 2, name: "Snake Plant", price: 35, img: "/2.png", counter: 1 },
  { id: 3, name: "Fiddle Leaf Fig", price: 65, img: "/3.png", counter: 1 },
  { id: 4, name: "Pothos", price: 40, img: "/4.png", counter: 1 },
  { id: 5, name: "ZZ Plant", price: 60, img: "/5.png", counter: 1 },
  { id: 6, name: "Spider Plant", price: 45, img: "/6.png", counter: 1 },
  { id: 7, name: "Rubber Plant", price: 55, img: "/7.png", counter: 1 },
  { id: 8, name: "Peace Lily", price: 50, img: "/8.png", counter: 1 },
  { id: 9, name: "Philodendron", price: 65, img: "/9.png", counter: 1 },
  { id: 10, name: "Succulent", price: 35, img: "/10.png", counter: 1 },
  { id: 11, name: "Bamboo Palm", price: 60, img: "/11.png", counter: 1 },
  { id: 12, name: "Aloe Vera", price: 40, img: "/12.png", counter: 1 }
];

function App() {

  const[plantsInTheCart, setPlantsInTheCart] = useState([])

  const handleAddPlantTheCart = (product) => {
    if(plantsInTheCart.some(plant => plant.id === product.id)) {
      product.counter += 1
    } else {
    setPlantsInTheCart([...plantsInTheCart, product])}
  }

  const handleRemovePlantFromTheCart = (product) => {
    setPlantsInTheCart(plantsInTheCart.filter(plantInTheCart => plantInTheCart.id !== product.id))
    product.counter = 1
  }


  // TO NIE DZIALA - PIERWOTNIE BYLO W COMPONENCIE ShoppingCartEelement, WYCIAGNELAM WYZEJ, ALE NIE MAM POMYSLU
  // const[counter, setCounter] = useState(1)
  // const incrementCounter = () => {
  //     setCounter(prevCounter => prevCounter +=1)
  // }

  // const decrementCounter = () => {
  //     setCounter(prevCounter => prevCounter -=1)
  // }

  let noOfCartProducts = 0;
  plantsInTheCart.forEach(plant => {
    noOfCartProducts += plant.counter
  })

  let totalPrice = 0;
  plantsInTheCart.forEach(plant => {
    totalPrice += (plant.counter*plant.price)
  })

  const shippingCost = totalPrice>150 ? 0 : 10 * noOfCartProducts



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header noOfCartProducts={noOfCartProducts}/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Products  products={products}
      addPlant={handleAddPlantTheCart}/>}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/FAQ" element={<FaqPage />}/>
      <Route path="/product/:id" element={<ProductPage 
      addPlant={handleAddPlantTheCart}/>}/>
      <Route path="/cart" element={<CartPage 
    cartProducts={plantsInTheCart}
    totalPrice={totalPrice}
    shippingCost={shippingCost}
    removePlant={handleRemovePlantFromTheCart}/>}/>
    </Routes>
    </Suspense>

  )
}

export default App

