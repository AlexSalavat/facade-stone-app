import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BottomNav from './components/shared/BottomNav';

const Catalog = () => <div style={{paddingBottom:80,paddingTop:42,textAlign:'center'}}>Каталог</div>;
const News = () => <div style={{paddingBottom:80,paddingTop:42,textAlign:'center'}}>Новости</div>;
const Useful = () => <div style={{paddingBottom:80,paddingTop:42,textAlign:'center'}}>Полезное</div>;
const Cart = () => <div style={{paddingBottom:80,paddingTop:42,textAlign:'center'}}>Корзина</div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/useful" element={<Useful />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}
