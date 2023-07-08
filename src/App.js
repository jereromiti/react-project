import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es un proyecto de React"/>
    </div>
  );
}

export default App;
