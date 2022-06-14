import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ResponsiveAppBar from "./components/NavBar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ResponsiveAppBar>
    </ResponsiveAppBar>
  </StrictMode>,
  rootElement
);

function App () {
    return <>
    <ResponsiveAppBar/>
    </>
}

export default App