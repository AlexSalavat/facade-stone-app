// src/components/products.jsx

export const products = [
  {
    id: "botulax-200",
    name: "Botulax 200",
    country: "Корея",
    rating: 4.8,
    price: 3200,
    stock: 15,
    images: [
      "/images/products/botulax-200-1.webp",
      "/images/products/botulax-200-2.webp",
      "/images/products/botulax-200-3.webp"
    ],
    pdf: "/pdf/botulax-200.pdf",
    short_desc: "Оригинальный ботулинический токсин для инъекций.",
    long_desc: "Botulax 200 — препарат для коррекции мимических морщин. Снимает мышечное напряжение, эффект длится 5-7 месяцев. Стерильный, подходит для всех типов кожи.",
    composition: "Clostridium Botulinum Toxin Type A 200 units.",
    advantages: [
      "Быстрый эффект",
      "Минимум побочных реакций",
      "Высокая чистота препарата"
    ],
    usage: "Коррекция морщин на лбу, вокруг глаз, между бровями и т.д."
  },
  // ... другие товары по такой же схеме
];
