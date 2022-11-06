import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenido"/>
    </>
  );
}

export default App;
