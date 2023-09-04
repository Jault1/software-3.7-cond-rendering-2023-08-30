import { useContext } from 'react';

import styles from "./Card.module.css";
import Button from "./Button";
import Input from "./Input";
import ProductContext from "../context/ProductContext";

// name
// handlerMinus
// count
// handlerPlus
// price
// discount
// handlerChangeName
// handlerChangePrice

function Card({
  handlerAddProduct
}) {
  const ctx = useContext(ProductContext);
  return (
    <div className={styles.container}>
      <div className={styles.name}>{ctx.name}</div>
      <div className={styles.counter}>
        <Button label="➖" onClick={ctx.handlerMinus} />
        <span className={styles.count}>{ctx.count}</span>
        <Button label="➕" onClick={ctx.handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${ctx.price}`} each</div>
      <div className={styles.discount}>{`Discount: ${ctx.discount}%`}</div>
      <div className={styles.form}>
        <Input value={ctx.name} label="Product Name" onChange={ctx.handlerChangeName} />
        <Input value={ctx.price} label="Price" onChange={ctx.handlerChangePrice} />
      </div>
      <Button label="Add Product" onClick={handlerAddProduct} />
    </div>
  );
}
export default Card;
