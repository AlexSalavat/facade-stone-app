import React from "react";
import '../../styles/Home.css';

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-overlay" />
      <div className="container">
        <div className="home-content">
          <div className="home-logo">LumiSkin</div>
          <div className="home-desc">
            Каталог оригинальных корейских инъекций.<br />
            Новости, прямые поставки, всё о современной косметологии.
          </div>
        </div>
      </div>
    </div>
  );
}
