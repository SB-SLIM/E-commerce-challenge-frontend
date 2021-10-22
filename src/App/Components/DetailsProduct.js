import React from "react";
import ButtonCounter from "./ButtonCounter";
import Button from "./Button";

export default function DetailsProduct({ counter, value }) {
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
          <div className="new-price">$125</div>
          <div className="discount">50%</div>
        </div>
        <div className="old-price">$250</div>
      </div>
      <div className="product__btn">
        <ButtonCounter counter={counter} value={value} />
        <Button isIcon={true}>Add to cart</Button>
      </div>
    </div>
  );
}
