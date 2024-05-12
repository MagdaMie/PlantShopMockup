import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ProductPage from "./components/ProductPage"
import Home from "./components/Home"
import Products from "./components/Products"
import FaqPage from "./components/FaqPage"
import ContactPage from "./components/ContactPage"


function App() {

  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/shop" element={<Products />}/>
    <Route path="/contact" element={<ContactPage />}/>
    <Route path="/FAQ" element={<FaqPage />}/>
    <Route path="/product" element={<ProductPage />}/>
    </Routes>
    </>
  )
}

export default App
