import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const product = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="hola" className="text-bold" />
          {/* <ProductCard.Buttons/> */}
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "red" }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.5)' }}/>
          <ProductTitle style={{ fontWeight: 'bold'}} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
