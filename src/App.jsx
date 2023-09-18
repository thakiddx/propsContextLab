import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
//products array
const products = [
  { name: 'Laptop', price: 1000, inCart: false },
  { name: 'Smartphone', price: 500, inCart: false },
  { name: 'Headphones', price: 100, inCart: false },
  { name: 'Keyboard', price: 50, inCart: false },
  { name: 'Mouse', price: 30, inCart: false }
];


  return (
    <div>
      <h1>My Context App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products products={products}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
