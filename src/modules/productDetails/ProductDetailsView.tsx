import { useParams } from "react-router-dom";

export const ProductDetailsView = () => {
  const { category, brand, name } = useParams();
  return (
    <div>
      ProductDetailsView {category}/{brand}/{name}
    </div>
  );
};
