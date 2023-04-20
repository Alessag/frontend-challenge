/**
 * LIST OF PHONEs FOR THE HOME PAGE
 */

export interface Product {
  id: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  image: string;
}
export const phonesList: Product[] = [
  {
    id: "1",
    name: "Moto E6 Play",
    originalPrice: 899,
    currentPrice: 699,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/mx/sm-g990elgaltm/gallery/mx-galaxy-s21-fe-g990-sm-g990elgaltm-530644429",
  },
  {
    id: "2",
    name: "Samsung Galaxy A21s",
    originalPrice: 799,
    currentPrice: 599,
    image: "https://i.blogs.es/ec3e67/samsung-galaxy-a21s/1366_2000.jpg",
  },
  {
    id: "3",
    name: "iPhone 14",
    originalPrice: 699,
    currentPrice: 499,
    image:
      "https://cdn.shopify.com/s/files/1/0569/6602/1154/products/IMG-7325562_1946x.jpg?v=1662683624",
  },
  {
    id: "4",
    name: "Redmi note 11A",
    originalPrice: 800,
    currentPrice: 600,
    image:
      "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679368247.59569964!800x800!85.png",
  },
  {
    id: "5",
    name: "Moto E7+",
    originalPrice: 500,
    currentPrice: 300,
    image: "https://m.media-amazon.com/images/I/614TeX+ZRiS._SL1000_.jpg",
  },
  {
    id: "6",
    name: "Motorola G10",
    originalPrice: 750,
    currentPrice: 250,
    image:
      "https://www.wom.co/media/catalog/product/cache/e4fc89a0c734bb8aae9953d6b783d4aa/m/o/motorola-g60.jpg",
  },
];
