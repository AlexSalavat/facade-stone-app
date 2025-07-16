// src/components/products.js

export const products = [
  {
    id: "botulax-200",
    name: "Botulax 200",
    category: "botox",  // обязательно!
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
  // пример для других категорий:
  {
    id: "rejeunesse-deep",
    name: "Rejeunesse Deep",
    category: "fillers", // Филлеры
    country: "Корея",
    rating: 4.7,
    price: 1900,
    stock: 8,
    images: [
      "/images/products/rejeunesse-deep-1.webp"
    ],
    pdf: "/pdf/rejeunesse-deep.pdf",
    short_desc: "Филлер на основе гиалуроновой кислоты.",
    long_desc: "Rejeunesse Deep предназначен для коррекции глубоких морщин и объёмного моделирования.",
    composition: "Гиалуроновая кислота 24 мг/мл.",
    advantages: [
      "Однородная гель-структура",
      "Длительный эффект",
      "Минимальный отёк"
    ],
    usage: "Коррекция носогубных складок, увеличение объёма губ и подбородка."
  },
  {
    id: "aquashine-pt",
    name: "Aquashine PT",
    category: "biorevitalization", // Биоревитализация
    country: "Корея",
    rating: 4.6,
    price: 1700,
    stock: 12,
    images: [
      "/images/products/aquashine-pt-1.webp"
    ],
    pdf: "/pdf/aquashine-pt.pdf",
    short_desc: "Мезопрепарат для глубокого увлажнения кожи.",
    long_desc: "Aquashine PT — препарат для восстановления и улучшения эластичности кожи.",
    composition: "Гиалуроновая кислота 15 мг/мл + пептиды.",
    advantages: [
      "Увлажнение",
      "Лифтинг",
      "Комплексный омолаживающий эффект"
    ],
    usage: "Омоложение кожи лица, шеи, декольте."
  },
  // ... и так далее для других категорий:
  // category: "mesotherapy", "lipolitics", "peptides", "apparatus", "sets", "threads", "aftercare"
];
