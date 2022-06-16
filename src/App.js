//@ts-check

import ResponsiveAppBar from "./Components/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer.jsx"
import ItemCount from "./Components/ItemCount.jsx";


function App () {



    return (

      <div>
        <ResponsiveAppBar/>
        <ItemListContainer greeting= "Los mejores precios en instrumentos musicales"/>
        <ItemCount stock="10" initial= "1" onAdd = "onAdd"></ItemCount>
      </div>
    )
    
}

export default App