
export interface FoodCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export const foodCategories: FoodCategory[] = [
  {
    id: 1,
    title: "کباب‌ها",
    slug: "kebabs",
    description: "انواع کباب‌های تازه و لذیذ",
    image: "/images/categories/kebabs.jpg",
  },
  {
    id: 2,
    title: "جگرها",
    slug: "jegar",
    description: "طعم اصیل جگر و دل و قلوه",
    image: "/images/categories/jegar.jpg",
  },
  {
    id: 3,
    title: "دسر و پیش‌غذا",
    slug: "desserts",
    description: "مکمل‌های خوشمزه غذای شما",
    image: "/images/categories/desserts.jpg",
  },
  {
    id: 4,
    title: "نوشیدنی‌ها",
    slug: "drinks",
    description: "نوشیدنی‌های خنک و دلچسب",
    image: "/images/categories/drinks.jpg",
  },
  {
    id: 5,
    title: "چلوکباب‌ها",
    slug: "chelo-kebabs",
    description: "ترکیب بی‌نظیر کباب و برنج ایرانی",
    image: "/images/categories/chelo-kebabs.jpg",
  },
];
