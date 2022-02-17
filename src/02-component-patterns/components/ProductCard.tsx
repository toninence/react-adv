import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";



export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext;








export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, doIncreaseBy } = useProduct();

  return (
    <Provider value={{counter, doIncreaseBy, product}}>
    <div className={styles.productCard}>
      {children}
    </div>
    </Provider>
  );
};

