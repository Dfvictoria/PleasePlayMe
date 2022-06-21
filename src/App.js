//@ts-check

import ResponsiveAppBar from "./Components/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer.jsx";
import ItemCount from "./Components/ItemCount.jsx";

function App() {
  let stock = 10;
  let initial = 1;
  function onAdd() {
    alert("Agregaste al carrito");
  }

  return (
    <div>
      <ResponsiveAppBar />
      <ItemListContainer />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </div>
  );
}

export default App;
