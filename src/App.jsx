import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import BottomNav from './components/shared/BottomNav';

const News = () => <div style={{height:'100vh',background:'#181a20',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>Новости</div>;
const Market = () => <div style={{height:'100vh',background:'#181a20',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>Маркет</div>;
const Profile = () => <div style={{height:'100vh',background:'#181a20',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>Профиль</div>;

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNav />
    </>
  );
}
