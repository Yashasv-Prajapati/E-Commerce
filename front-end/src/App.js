import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Products from "./components/products/Products";
import PrivateComponent from "./components/PrivateComponent";
import AddProduct from "./components/addProduct/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const Users = [];

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<AddProduct />} />
            <Route
              path="/update"
              element={<h1>Product Updating Component</h1>}
            />
            <Route path="/delete" element={<h1>Product Delete Component</h1>} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
