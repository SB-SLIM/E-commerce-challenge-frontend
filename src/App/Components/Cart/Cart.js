import { Button } from "../Button";
import React from "react";
import CartProduct from "./CartProduct";

export default function Cart({ products, count, isShow = false }) {
  // console.log("TEST SB: " + products === null);

  let cName = "cart__item--position cart__item ";
  if (isShow) {
    cName += "show";
  } else {
    cName = "cart__item--position cart__item ";
  }

  return (
    <div className={cName}>
      <div className="cart__header">
        <h5>Cart</h5>
        <hr />
      </div>

      <div>
        {products.length === 0 ? (
          <div className="cart__empty">Your cart is empty</div>
        ) : (
          products.map((p) => (
            <CartProduct key={p.id} product={p}></CartProduct>
          ))
        )}
        <div className="cart__button">
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
}
