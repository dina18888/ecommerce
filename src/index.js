import React from "react";
import ReactDOM from "react-dom/client";
import 'font-awesome/css/font-awesome.min.css'; // Ensure the font-awesome package is installed
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure the bootstrap package is installed
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import for react-router-dom v6
import { Provider } from "react-redux";
import store from "./redux/store"; // Ensure your store is correctly configured

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages"; // Ensure the pages are correctly exported

import ScrollToTop from "./components/ScrollToTop"; // Ensure this component is available
import { Toaster } from "react-hot-toast"; // Ensure react-hot-toast is installed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </ScrollToTop>
    <Toaster />
  </BrowserRouter>
);
