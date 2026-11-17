
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}



export const menuItems: MenuItem[] = [
  // Kebabs
  {
    id: 1,
    name: "کباب کوبیده مخصوص",
    description: "دو سیخ کباب کوبیده تازه همراه با گوجه کبابی",
    price: 280000,
    image: "/images/menu/koobideh.jpg",
    category: "kebabs",
  },
  {
    id: 2,
    name: "جوجه کباب زعفرانی",
    description: "تکه‌های مرغ مزه‌دار شده با زعفران و ادویه مخصوص",
    price: 320000,
    image: "/images/menu/jujeh.jpg",
    category: "kebabs",
  },
  {
    id: 3,
    name: "کباب برگ",
    description: "گوشت گوسفندی تازه با طعمی لذیذ و اصیل",
    price: 480000,
    image: "/images/menu/barg.jpg",
    category: "kebabs",
  },
  {
    id: 4,
    name: "چنجه مخصوص",
    description: "تکه‌های گوشت گوسفندی مزه‌دار شده و کبابی",
    price: 520000,
    image: "/images/menu/ch enjeh.jpg",
    category: "kebabs",
  },

  // Jigar
  {
    id: 5,
    name: "جگر گوسفندی",
    description: "جگر تازه گوسفندی کباب شده روی زغال",
    price: 180000,
    image: "/images/menu/jegar.jpg",
    category: "jegar",
  },
  {
    id: 6,
    name: "دل گوسفندی",
    description: "دل تازه گوسفندی با ادویه مخصوص",
    price: 190000,
    image: "/images/menu/del.jpg",
    category: "jegar",
  },
  {
    id: 7,
    name: "قلوه گوسفندی",
    description: "قلوه کبابی تازه و خوش‌طعم",
    price: 170000,
    image: "/images/menu/ghalveh.jpg",
    category: "jegar",
  },

  // Desserts and appetizers
  {
    id: 8,
    name: "ماست و خیار",
    description: "ماست تازه همراه با خیار، نعنا و کشمش",
    price: 65000,
    image: "/images/menu/mast-khiar.jpg",
    category: "desserts",
  },
  {
    id: 9,
    name: "سالاد شیرازی",
    description: "ترکیب خیار، گوجه و پیاز با آب‌لیموی تازه",
    price: 55000,
    image: "/images/menu/salad-shirazi.jpg",
    category: "desserts",
  },
  {
    id: 10,
    name: "زیتون پرورده",
    description: "زیتون پرورده شمالی با طعم رب انار و گردو",
    price: 85000,
    image: "/images/menu/zeitoun.jpg",
    category: "desserts",
  },

  // Drinks
  {
    id: 11,
    name: "دوغ محلی",
    description: "دوغ خنک و تازه همراه با نعنا",
    price: 35000,
    image: "/images/menu/doogh.jpg",
    category: "drinks",
  },
  {
    id: 12,
    name: "نوشابه قوطی",
    description: "نوشابه گازدار خنک",
    price: 30000,
    image: "/images/menu/soda.jpg",
    category: "drinks",
  },
  {
    id: 13,
    name: "آب معدنی",
    description: "آب معدنی خنک",
    price: 15000,
    image: "/images/menu/water.jpg",
    category: "drinks",
  },

  // Chelo kebabs
  {
    id: 14,
    name: "چلو کباب کوبیده",
    description: "دو سیخ کوبیده همراه با برنج ایرانی و گوجه کبابی",
    price: 390000,
    image: "/images/menu/chelo-koobideh.jpg",
    category: "chelo-kebabs",
  },
  {
    id: 15,
    name: "چلو جوجه کباب",
    description: "جوجه زعفرانی همراه با برنج ایرانی و کره",
    price: 420000,
    image: "/images/menu/chelo-jujeh.jpg",
    category: "chelo-kebabs",
  },
  {
    id: 16,
    name: "چلو کباب سلطانی",
    description: "ترکیب کباب برگ و کوبیده همراه با برنج ایرانی",
    price: 690000,
    image: "/images/menu/chelo-soltani.jpg",
    category: "chelo-kebabs",
  },
];
