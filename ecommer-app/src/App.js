import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <div style={{ background: 'rgb(242, 243, 244)', height:'100vh' }}>
        <ItemListContainer greeting="Bienvenido a MarkTech" />
      </div>
    </>
  );
}

export default App;
