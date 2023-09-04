// Use a combination of useState and useContext
import { useState, useContext } from "react";
// import uuid & you'll need to run: npm install uuid
import { v4 as uuid } from "uuid";

import styles from "./Product.module.css";
// This creates the card portion which is the entire top part above the table
import Card from "./Card";
import ViewList from "./ViewList";

import ProductContext from "../context/ProductContext";
import ModeContext from "../context/ModeContext";
import Toggle from "./Toggle";
import Button from "./Button";

function Product() {
  const ctx = useContext(ProductContext);
  const modeCtx = useContext(ModeContext);
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const blankForm = {
    index: 0,
    name: "",
    quantity: 0,
    price: 0,
    discount: 0,
  };
  const [form, setForm] = useState(blankForm);

  /*
    CREATE: Add a new product into the list
  */
  const handlerAddProduct = () => {
    const newItem = {
      id: uuid(),
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };
    const newList = [...list, newItem];
    setList(newList);
    const sum = sumTotal + newItem.total;
    setSumTotal(sum);
  };

  /*
    DELETE a product from the list according to the given ID
  */
    const handlerDeleteProduct = (id) => {
      // Create a new item list with everything, except the item with matching ID
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
    };

    const handlerDeleteProductDisable = () => {
      // Disable the delete button on edit
      // Do nothing - disables it
      // Don't want to uddate the list like above, but would like to disable the button or not show it.
    };



  /*
    UPDATE: Submit edit form values into current product list 
  */
  const handlerSubmitForm = (event) => {
    event.preventDefault();

    // Create new item and copy values from form
    const newItem = { ...list[form.index] };
    console.log(newItem);
    newItem.name = form.name;
    newItem.quantity = form.quantity;
    newItem.price = form.price;
    newItem.discount = form.discount;
    newItem.total = (form.quantity * form.price * (100 - form.discount)) / 100;

    // Copy current list and replace edited item
    const newList = [...list];
    newList[form.index] = newItem;
    setList(newList);

    // Remove the total sum and replace with the new total
    const newSum = sumTotal - list[form.index].total + newItem.total;
    setSumTotal(newSum);

    setIsEditing(false);
  };

  /*
    Edit an existing product ID with values fileld into edit form
  */
  const handlerEditForm = (id) => {
    const i = list.findIndex((item) => item.id === id);
    const editValues = {
      index: i,
      name: list[i].name,
      quantity: list[i].quantity,
      price: list[i].price,
      discount: list[i].discount,
    };
    setForm(editValues);
    setIsEditing(true);
  };

  /*
    Helper function to update editor form before submitting to UPDATE handler
  */
  const handlerUpdateForm = (event, key) => {
    const value = event.target.value;
    const updatedForm = { ...form, [key]: value };
    setForm(updatedForm);
  };

  //---------------------------------------------------------------------------

  return (
    <div className={`${styles.container} ${modeCtx.isDark && styles.dark}`}>
      <Toggle />
      <Card handlerAddProduct={handlerAddProduct} />
      {isEditing && (
        <ViewList
          list={list}
          sum={sumTotal}
          handlerDeleteItem={handlerDeleteProductDisable}  // Pass a dummy handler
          handlerEditItem={handlerEditForm}
        />
      )}
      {(!isEditing)  && (
        <ViewList
          list={list}
          sum={sumTotal}
          handlerDeleteItem={handlerDeleteProduct}
          handlerEditItem={handlerEditForm}
        />
      )}      
      {isEditing && (
        <form className={styles.form} onSubmit={handlerSubmitForm}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Disc %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    value={form.name}
                    type="text"
                    onChange={(e) => handlerUpdateForm(e, "name")}
                  />
                </td>
                <td>
                  <input
                    value={form.quantity}
                    type="number"
                    min={1}
                    onChange={(e) => handlerUpdateForm(e, "quantity")}
                  />
                </td>
                <td>
                  <input
                    value={form.price}
                    type="number"
                    min={0}
                    step={0.01}
                    onChange={(e) => handlerUpdateForm(e, "price")}
                  />
                </td>
                <td>
                  <input
                    value={form.discount}
                    type="number"
                    min={0}
                    onChange={(e) => handlerUpdateForm(e, "discount")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" />
          <Button label="Cancel" onClick={() => setIsEditing(false)} />
        </form>
      )}
    </div>
  );
}

export default Product;
