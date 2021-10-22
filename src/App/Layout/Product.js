import React from "react";
import { Button } from "../Components/Button";
import Carousel from "../Components/Carousel";
import DetailsProduct from "../Components/DetailsProduct";

export function Product({ product, onClick, isBtncarousel, counter, value }) {
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
        <DetailsProduct counter={counter} value={value} />
      </div>
    </div>
  );
}
