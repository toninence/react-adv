import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";


export interface Props {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({className, style}: Props) => {

    const { doIncreaseBy, counter} = useContext(ProductContext);
    return (
      <div className={`${styles.buttonsContainer} ${className}`} style={style}>
        <button className={styles.buttonMinus} onClick={() => doIncreaseBy(-1)}>
          -
        </button>
  
        <div className={styles.countLabel}>{counter}</div>
  
        <button className={styles.buttonAdd} onClick={() => doIncreaseBy(1)}>
          +
        </button>
      </div>
    );
  };