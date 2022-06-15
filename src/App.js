//@ts-check

import ResponsiveAppBar from "./Components/NavBar.jsx";
import ItemListContainer from "./Components/ItemListContainer.jsx"


function App () {
    return (
      <div>
        <ResponsiveAppBar/>
        <ItemListContainer greeting= "Los mejores precios en instrumentos musicales"/>
      </div>
    )
    
}

export default App