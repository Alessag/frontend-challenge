import { useParams } from "react-router-dom";

export const ProductDetailsView = () => {
  const { category, brand, name } = useParams();
  return (
    <div>
      <div className="border-2 border-red-600 my-2">
        <p>Vovler a resultados</p>
        <p>
          {category}/{brand}/{name}
        </p>
      </div>

      <div className="border-2 border-green-700 my-2 flex">
        <div className="">List of vertical images</div>
        <div className="">Main product image</div>
        <div className="">
          Product description, name, rting, price, blah, blah{" "}
        </div>
      </div>

      <div className="border-2 border-blue-400 my-2">
        <h1>Informacion detallada del producto</h1>
        <p>image</p>
        <p>image</p>
        <div>tabs menu with: otras especificaciones y reviews(number)</div>
      </div>

      <div className="border-2 border-orange-400 my-2">
        <p>image</p>
        <p>image</p>
        <h1>Lleva este celular a credito</h1>
      </div>

      <div className="border-2 border-black my-2">
        <h1>Productos relacionados</h1>
        <div>*inserte componente de productos relacionados*</div>
      </div>
    </div>
  );
};
