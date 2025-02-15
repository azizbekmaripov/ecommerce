import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/Contact/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About"
import SingleProduct from "./pages/shop/single-product";
import Login from "./pages/Sign/Login"
import SearchBar from "./components/SearchBar/SearchBar";
import { Favorites } from "./pages/Favorites/Favorites";
import Register from "./pages/Sign/Register";


function App() {
  
  return (
    <div className="wrapper">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
