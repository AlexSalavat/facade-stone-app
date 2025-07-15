import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div
      className="home-bg"
      style={{
        backgroundImage: 'url("/images/bg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="home-overlay" />
      <div className="home-content">
        <div className="home-logo">LumiSkin</div>
        <div className="home-desc">
          Каталог оригинальных корейских инъекций.<br />
          Новости, прямые поставки, всё о современной косметологии.
        </div>
      </div>
    </div>
  );
}
