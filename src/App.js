import "./App.css";
import "../src/Pages/homepage/Homepage.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
