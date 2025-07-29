import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BottomNav from './components/shared/BottomNav';

const Catalog = () => <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#181a20',color:'#fff',fontSize:22}}>Каталог</div>;
const News = () => <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#181a20',color:'#fff',fontSize:22}}>Новости</div>;
const Market = () => <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#181a20',color:'#fff',fontSize:22}}>Маркет</div>;
const Cart = () => <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#181a20',color:'#fff',fontSize:22}}>Корзина</div>;

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/news" element={<News />} />
        <Route path="/market" element={<Market />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <BottomNav />
    </>
  );
}
