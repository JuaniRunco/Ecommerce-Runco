import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div>
            <Routes>
              <Route path='/' element={
                <ItemListContainer greeting="Bienvenido a MarkTech" />
              } />
              <Route path='/category/:categoryId' element={
                <ItemListContainer greeting="MarkTech" />
              } />
              <Route path='/item/:id' element={
                <ItemDetailContainer />
              } />
              <Route path='/cart' element={
                <CartContainer />
              } />
              <Route path='*' element={
                <ItemListContainer greeting="Bienvenido a MarkTech" />
              } />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
