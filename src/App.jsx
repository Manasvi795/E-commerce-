import { Routes, Route, Navigate } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/catalogue" />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
