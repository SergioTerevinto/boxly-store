import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="Lo más vendido" />
    </div>
  );
}

export default App;