import React from "react";

import Carousel from "../Components/Carousel";
import DetailsProduct from "../Components/DetailsProduct";

export function Product({
  product,
  onClick,
  isBtncarousel,
  counter,
  value,
  onAdd,
}) {
  let imgs = product.img_big;
  console.log("TEST Product IMG " + imgs);
  return (
    <div className="container Product">
      <div className="row">
        <Carousel
          onClick={onClick}
          img={product.img}
          img_big={imgs}
          isBtncarousel={isBtncarousel}
        />
        <DetailsProduct
          product={product}
          counter={counter}
          value={value}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
}
