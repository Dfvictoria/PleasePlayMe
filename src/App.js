//@ts-check

import ResponsiveAppBar from "./Components/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart.jsx"

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:id" element={<ItemListContainer />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
