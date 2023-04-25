import "./App.css";
import "../src/Pages/homepage/Homepage.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/homepage/shop/Shop";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
