import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product } from '../interfaces/interfaces';

export const ShoppingPage = () => {
  const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
  }
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
        <ProductCard product={product} >
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons />
        </ProductCard>

     <ProductCard product={product}>
       <ProductCard.Image/>
       <ProductCard.Title/>
       {/* <ProductCard.Buttons/> */}
       <ProductCard.Buttons/>
     </ProductCard>

      </div>
    </div>
  );
};
