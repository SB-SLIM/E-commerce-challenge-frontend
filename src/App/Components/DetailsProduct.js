import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import Button from "./Button";

export default function DetailsProduct({ product, onAdd }) {
  const [counter, setCounter] = useState(0);
  let pp = [];
  const handelClick = (e) => {

    if (counter === 0) {
      return;
    } else {
      pp.id = product.id;
      pp.newPrice = product.newPrice;
      pp.descrption = product.descrption;
      pp.counter = counter;
      pp.img = "/assets/image-product-1-thumbnail.jpg";
      onAdd(pp);
    }
    
  };

  return (
    <div className="detailsProduct product--padding col-12 col-md-6 ">
      <div className="product__company">sneaker company</div>
      <div className="product__title ">
        <h1>Fall Limited Edition Sneaker</h1>
      </div>
      <div className="product__description color-dark-grayish-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus
        porro corrupti, dolorem nesciunt est assumenda reprehenderit. Pariatur,
        totam? Saepe expedita obcaecati quisquam nihil .
      </div>
      <div className="product__mount">
        <div className="price">
          <div className="new-price">${product.newPrice}</div>
          <div className="discount">{product.discount}</div>
        </div>
        <div className="old-price">${product.oldPrice}</div>
      </div>
      <div className="product__btn">
        <ButtonCounter counter={setCounter} value={counter} />
        <Button isIcon={true} onclick={handelClick}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
