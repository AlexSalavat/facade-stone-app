import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <img src="/images/bg.webp" alt="LumiSkin Banner" className="home-banner" />
      <div className="home-title-wrap">
        <h1 className="home-title">LumiSkin PRO</h1>
        <p className="home-desc">Твой маркетплейс косметологии, всё для профи и не только!</p>
      </div>
    </div>
  );
}
