import { ProductCategory } from "./enums";

export const parseCategory = (category: string): ProductCategory => {
  switch (category) {
    case "club":
      return ProductCategory.CLUB;
    case "tracking":
      return ProductCategory.TRACKING;
    case "stores":
      return ProductCategory.STORE;
    case "loans":
      return ProductCategory.LOAN;
    case "motorcycle":
      return ProductCategory.MOTORCYCLE;
    case "phones":
      return ProductCategory.PHONE;
    default:
      return ProductCategory.PHONE;
  }
};

export const getImageUrl = (id: string) => {
  return `https://picsum.photos/seed/${id}/385/445`;
};
