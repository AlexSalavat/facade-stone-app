import React, { useState } from "react";

// Примеры твоих текстур (можно дополнять массив)
const textures = [
  {
    name: "Paris",
    img: "/images/textures/paris1.webp"
  },
  {
    name: "Dijon",
    img: "/images/textures/dijon1.webp"
  }
  // Можешь добавить ещё свои варианты здесь!
];

// Один шаблон дома (можно добавить ещё)
const houses = [
  {
    name: "Современный дом",
    img: "/images/houses/modern.webp" // твой шаблон дома
  }
];

export default function FacadePreview() {
  const [selectedHouse, setSelectedHouse] = useState(houses[0]);
  const [selectedTexture, setSelectedTexture] = useState(textures[0]);

  return (
    <div style={{ padding: 24, minHeight: "100vh", background: "#191a1b" }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: 28,
        fontSize: "2rem",
        fontWeight: 800,
        letterSpacing: ".5px",
        color: "#fff"
      }}>
        Примерь камень на фасад
      </h2>

      {/* Шаблон дома (можно расширить, если добавишь больше) */}
      <div style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        marginBottom: 24,
        flexWrap: "wrap"
      }}>
        {houses.map((h) => (
          <button
            key={h.name}
            onClick={() => setSelectedHouse(h)}
            style={{
              border: selectedHouse === h ? "2.5px solid #21e673" : "1.5px solid #555",
              borderRadius: 12,
              background: "#181a1b",
              padding: 8,
              transition: ".12s",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <img
              src={h.img}
              alt={h.name}
              width={110}
              height={68}
              style={{
                borderRadius: 9,
                objectFit: "cover",
                boxShadow: selectedHouse === h ? "0 4px 16px #21e67355" : "0 2px 8px #0009"
              }}
            />
            <div style={{
              fontSize: 14,
              color: selectedHouse === h ? "#21e673" : "#ccc",
              fontWeight: 600,
              marginTop: 7
            }}>{h.name}</div>
          </button>
        ))}
      </div>

      {/* Примерка: дом + наложение камня */}
      <div style={{
        position: "relative",
        width: 380,
        height: 220,
        margin: "0 auto 24px auto",
        background: "#222",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 6px 38px #181a1b55"
      }}>
        <img
          src={selectedHouse.img}
          alt="Дом"
          width={380}
          height={220}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "block"
          }}
        />
        {/* Наложение текстуры */}
        <img
          src={selectedTexture.img}
          alt="Текстура"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.72,
            mixBlendMode: "multiply",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Выбор текстуры */}
      <div style={{
        display: "flex",
        gap: 10,
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 0
      }}>
        {textures.map((t) => (
          <button
            key={t.name}
            onClick={() => setSelectedTexture(t)}
            style={{
              border: selectedTexture === t ? "2.5px solid #21e673" : "1.5px solid #555",
              borderRadius: 10,
              background: "#252827",
              padding: 4,
              outline: "none",
              transition: ".14s",
              cursor: "pointer"
            }}
          >
            <img
              src={t.img}
              alt={t.name}
              width={64}
              height={44}
              style={{
                borderRadius: 7,
                objectFit: "cover",
                boxShadow: selectedTexture === t ? "0 2px 8px #21e67355" : "0 1px 5px #0007"
              }}
            />
            <div style={{
              fontSize: 13,
              color: selectedTexture === t ? "#21e673" : "#bbb",
              fontWeight: 600,
              marginTop: 5
            }}>{t.name}</div>
          </button>
        ))}
      </div>

      {/* Кнопка оформления заявки */}
      <button
        style={{
          margin: "34px auto 0 auto",
          display: "block",
          padding: "14px 44px",
          fontSize: 19,
          borderRadius: 18,
          background: "#21e673",
          color: "#fff",
          border: "none",
          fontWeight: 800,
          boxShadow: "0 3px 18px #0e503760",
          cursor: "pointer",
          letterSpacing: ".7px"
        }}
      >
        Оформить заявку
      </button>
    </div>
  );
}
