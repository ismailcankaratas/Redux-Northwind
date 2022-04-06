import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import CartDetail from '../cart/CartDetail';
import Notfound from '../common/NotFound';
import Navi from '../navi/Navi';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/product" exact element={<Dashboard />} />
          <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
          <Route path="/saveproduct" element={<AddOrUpdateProduct />} />
          <Route path="/cart" exact element={<CartDetail />} />
          <Route path="*" exact element={<Notfound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
