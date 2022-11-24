import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
    <ItemListContainer/>
    </Layout>
  );
}

export default App;
