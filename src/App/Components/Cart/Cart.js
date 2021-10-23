import Button from "../Button";
import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";

export default function Cart({ product, isShow = false }) {
  const [cart, setCart] = useState([]);
  console.log("TEST SB: " + cart);

  let ppp = product;
  useEffect(() => {
    setCart([...cart, ppp]);
  }, [product]);

  const handelDelete = (id) => {
    let c = cart.filter((p) => p.id !== id);
    setCart(c);
  };
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
        {cart.length === 0 ? (
          <div className="cart__empty">Your cart is empty</div>
        ) : (
          cart.map((p) => (
            <CartProduct
              key={p.id}
              product={p}
              onDelete={handelDelete}
            ></CartProduct>
          ))
        )}
        {cart.length > 0 && (
          <div className="cart__button">
            <Button>Checkout</Button>
          </div>
        )}
      </div>
    </div>
  );
}
