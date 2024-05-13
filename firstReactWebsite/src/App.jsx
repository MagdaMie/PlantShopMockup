import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ProductPage from "./components/ProductPage"
import Home from "./components/Home"
import Products from "./components/Products"
import FaqPage from "./components/FaqPage"
import ContactPage from "./components/ContactPage"
import CartPage from "./components/CartPage"
import { useState } from "react"


function App() {
  const products = [
    { id: 1, name: "Monstera", price: 50, img: "/1.png" },
    { id: 2, name: "Snake Plant", price: 35, img: "/2.png" },
    { id: 3, name: "Fiddle Leaf Fig", price: 65, img: "/3.png" },
    { id: 4, name: "Pothos", price: 40, img: "/4.png" },
    { id: 5, name: "ZZ Plant", price: 60, img: "/5.png" },
    { id: 6, name: "Spider Plant", price: 45, img: "/6.png" },
    { id: 7, name: "Rubber Plant", price: 55, img: "/7.png" },
    { id: 8, name: "Peace Lily", price: 50, img: "/8.png" },
    { id: 9, name: "Philodendron", price: 65, img: "/9.png" },
    { id: 10, name: "Succulent", price: 35, img: "/10.png" },
    { id: 11, name: "Bamboo Palm", price: 60, img: "/11.png" },
    { id: 12, name: "Aloe Vera", price: 40, img: "/12.png" }
  ];

  const[plantsInTheCart, setPlantsInTheCart] = useState([])

  const handleAddPlantTheCart = (product) => {
    setPlantsInTheCart([...plantsInTheCart, product])
  }

  const handleRemovePlantFromTheCart = (id) => {
    setPlantsInTheCart(plantsInTheCart.filter(plantInTheCart => plantInTheCart.id !== id))
  }

  console.log(plantsInTheCart);

  return (
    <>
    <Header noOfCartProducts={plantsInTheCart.length}/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/shop" element={<Products products={products}
    addPlant={handleAddPlantTheCart}/>}/>
    <Route path="/contact" element={<ContactPage />}/>
    <Route path="/FAQ" element={<FaqPage />}/>
    <Route path="/product" element={<ProductPage />}/>
    <Route path="/cart" element={<CartPage 
    cartProducts={plantsInTheCart}
    removePlant={handleRemovePlantFromTheCart}/>}/>
    </Routes>
    </>
  )
}

export default App
