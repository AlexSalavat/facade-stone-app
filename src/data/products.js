export const products = [
  {
    id: "botulax-200",
    category: "botox",
    name: "Botulax 200",
    price: 3200,
    rating: 4.8,
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
    usage: "Коррекция морщин на лбу, вокруг глаз, между бровями и т.д.",
    combo: "Для максимального эффекта рекомендуется сочетать с гиалуроновой кислотой или мезотерапией."
  },
  {
    id: "hutox-100",
    category: "botox",
    name: "Hutox 100",
    price: 2350,
    rating: 4.7,
    stock: 9,
    images: [
      "/images/products/hutox-100-1.webp",
      "/images/products/hutox-100-2.webp",
      "/images/products/hutox-100-3.webp"
    ],
    pdf: "/pdf/hutox-100.pdf",
    short_desc: "Hutox 100 — современный ботулотоксин для косметологических процедур.",
    long_desc: "Hutox 100 — препарат нового поколения для устранения мимических морщин и гипергидроза. Обеспечивает выраженный и длительный эффект, отличается высокой степенью очистки и безопасностью.",
    composition: "Clostridium Botulinum Toxin Type A 100 units.",
    advantages: [
      "Выраженный и длительный результат",
      "Быстрое восстановление после процедуры",
      "Доступная цена"
    ],
    usage: "Коррекция морщин, лечение гипергидроза (повышенной потливости), профилактика возрастных изменений.",
    combo: "Лучше всего сочетается с биоревитализацией и пилингами."
  },
  {
    id: "belleera-r15",
    category: "fillers",
    name: "Belleera R15",
    price: 2000,
    rating: 4.6,
    stock: 12,
    images: [
      "/images/products/belleera-r15-1.webp",
      "/images/products/belleera-r15-2.webp"
    ],
    pdf: "/pdf/belleera-r15.pdf",
    short_desc: "Филлер на основе гиалуроновой кислоты.",
    long_desc: "Belleera R15 — филлер нового поколения для восполнения объема тканей, улучшения структуры кожи и лифтинга.",
    composition: "Гиалуроновая кислота 20 мг/мл",
    advantages: ["Устойчивый объем", "Мягкое введение", "Пролонгированный эффект"],
    usage: "Коррекция морщин, восполнение объема, лифтинг.",
    combo: "Идеален после ботулотоксина или мезотерапии."
  },
  {
    id: "sosum-soft",
    category: "fillers",
    name: "Sosum Soft",
    price: 2500,
    rating: 4.7,
    stock: 10,
    images: [
      "/images/products/sosum-soft-1.webp",
      "/images/products/sosum-soft-2.webp",
      "/images/products/sosum-soft-3.webp"
    ],
    pdf: "/pdf/sosum-soft.pdf",
    short_desc: "Филлер для деликатной коррекции.",
    long_desc: "Sosum Soft — предназначен для поверхностной коррекции морщин, подходит для губ и периорбитальной зоны.",
    composition: "Гиалуроновая кислота 20 мг/мл",
    advantages: ["Минимальная отёчность", "Лёгкость введения", "Устойчивый эффект"],
    usage: "Коррекция мелких морщин, губ, носогубных складок.",
    combo: "Хорошо сочетается с ботоксом и биоревитализантами."
  },
  {
    id: "neuramis-deep",
    category: "fillers",
    name: "Neuramis DEEP",
    price: 1800,
    rating: 4.5,
    stock: 18,
    images: [
      "/images/products/neuramis-deep-1.webp",
      "/images/products/neuramis-deep-2.webp"
    ],
    pdf: "/pdf/neuramis-deep.pdf",
    short_desc: "Универсальный филлер для средней глубины.",
    long_desc: "Neuramis DEEP — эффективный и безопасный препарат для восполнения объёма в средней дерме.",
    composition: "Гиалуроновая кислота 20 мг/мл с лидокаином",
    advantages: ["Хорошо держит форму", "Содержит анестетик", "Низкий риск отёков"],
    usage: "Коррекция губ, носогубных складок, подбородка.",
    combo: "Отлично с пептидами или ревитализацией."
  },
  {
    id: "kiara-reju",
    category: "biorevitalization",
    name: "Kiara Reju",
    price: 1350,
    rating: 4.9,
    stock: 22,
    images: [
      "/images/products/kiara-reju-1.webp",
      "/images/products/kiara-reju-2.webp",
      "/images/products/kiara-reju-3.webp"
    ],
    pdf: "/pdf/kiara-reju.pdf",
    short_desc: "Мощный ревитализант с пептидами и антиоксидантами.",
    long_desc: "Kiara Reju — препарат для интенсивного увлажнения и восстановления кожи на клеточном уровне.",
    composition: "PDRN, гиалуроновая кислота, коэнзимы",
    advantages: ["Сияние кожи", "Увлажнение", "Антиоксидантный эффект"],
    usage: "Лицо, шея, декольте, восстановление после агрессивных процедур.",
    combo: "Идеально после пилингов и мезотерапии."
  }
];

// ШАБЛОН ДЛЯ НОВЫХ ТОВАРОВ:
/*
{
  id: "product-id",
  category: "fillers", // или botox, biorevitalization и т.д.
  name: "Название",
  price: 0,
  rating: 0,
  stock: 0,
  images: ["/images/products/название.webp"],
  pdf: "/pdf/название.pdf",
  short_desc: "",
  long_desc: "",
  composition: "",
  advantages: [""],
  usage: "",
  combo: ""
}
*/
