import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
      <NavBar style={{ position: 'fixed' }} />
      <div style={{ background: 'rgb(242, 243, 244)', height: '100%' }}>
        <ItemListContainer greeting="Bienvenido a MarkTech" />
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
