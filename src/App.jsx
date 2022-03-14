import { Home } from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import { ProductList } from "./pages/productList/ProductList";
import { Register } from "./pages/register/Register";
import { Cart } from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
