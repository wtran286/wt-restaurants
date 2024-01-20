import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout/Checkout';
import Restaurants from './pages/Restaurants/Restaurants';
import Menu from './pages/Menu/Menu';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Restaurants />} path='*' />
          <Route element={<Menu />} path='/:storeName/menu' />
          <Route element={<Checkout />} path='checkout' />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
