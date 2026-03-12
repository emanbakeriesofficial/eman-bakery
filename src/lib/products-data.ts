export interface ProductCategory {
  name: string;
  arabicName: string;
  description: string;
  items: string[];
}

export const productCategories: ProductCategory[] = [
  {
    name: "Shami Breads",
    arabicName: "خبز شامي",
    description: "Traditional Levantine flatbreads, perfect for wraps and sandwiches",
    items: ["SHAMI", "SHAMI (25)", "SHAMI (×2)"]
  },
  {
    name: "Hub Breads",
    arabicName: "خبز حب",
    description: "Wholesome whole grain breads with rich, nutty flavor",
    items: ["HUB"]
  },
  {
    name: "Labanani Family",
    arabicName: "عائلة اللبناني",
    description: "Soft, milk-enriched breads in various sizes for every need",
    items: ["LABANANI", "LABANANI HB", "LABANANI VASATH ×8", "LABANANI WASTH ×10", "LABANANI BIG", "LABANANI (3 PCS)", "LABANANI (WASATH 4 PCS)", "LABANANI (5 PCS)", "LABANANI (WASATH 2 PCS)"]
  },
  {
    name: "Samooli Family",
    arabicName: "عائلة الصمولي",
    description: "Classic Saudi sandwich rolls, a staple in every kitchen",
    items: ["SAMOOLI", "SAMOOLI BIG", "SAMOOLI (2 PCS)", "SAMOOLI HUB", "SAMOOLI BIG HUB"]
  },
  {
    name: "Burger Breads",
    arabicName: "خبز برجر",
    description: "Soft, perfectly shaped buns for premium burger experiences",
    items: ["BURGER", "BURGER HB"]
  },
  {
    name: "Felafil Family",
    arabicName: "عائلة الفلافل",
    description: "Specially crafted breads designed to complement falafel dishes",
    items: ["FELAFIL", "FELAFIL HB", "FELAFIL SP", "FELAFIL (KANAKAM)", "FELAFIL (KANJU)", "FELAFIL (THALLA)", "FELAFIL (KUNJU)", "FELAFIL (LUKMA)", "FELAFIL (3 PCS)", "FELAFIL HB (3 PCS)"]
  },
  {
    name: "Abu Navas",
    arabicName: "أبو نواس",
    description: "Signature artisan breads with distinctive character and taste",
    items: ["ABU NAVAS", "ABU NAVAS HB"]
  },
  {
    name: "Chapathi Family",
    arabicName: "عائلة الشباتي",
    description: "Indian-style flatbreads in an extensive range of sizes and packs",
    items: [
      "CHAPATHI (TURTHILLA ×10)", "CHAPATHI (VASATH ×8)", "CHAPATHI (LARGE ×6)",
      "CHAPATHI (XL ×6)", "CHAPATHI (VASATH ×10)", "CHAPATHI (LARGE ×10)",
      "CHAPATHI (XL ×10)", "CHAPATHI (XXL ×6)", "CHAPATHI (VASATH ×25)",
      "CHAPATHI (LARGE ×25)", "CHAPATHI (XL ×25)", "CHAPATHI (VASATH HB ×8)",
      "CHAPATHI XXL ×10", "CHAPATHI LARGE HB", "CHAPATHI XXL 25",
      "CHAPATHI VASATH HB ×25", "CHAPATHI LARGE HB ×25", "CHAPATHI XL HB ×25",
      "CHAPATHI (XL ×12)", "CHAPATHI XL HB", "CHAPATHI XL HB 10"
    ]
  }
];
