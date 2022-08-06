import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{ background: 'rgb(242, 243, 244)' }}>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a MarkTech" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Bienvenido a MarkTech" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ItemListContainer greeting="Bienvenido a MarkTech" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
