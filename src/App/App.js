import { useEffect, useState } from "react";
import "../css/style.scss";
import Header from "./Layout/Header";
import { Product } from "./Layout/Product";
import "../../node_modules/bootstrap/js/dist/carousel";
import Carousel from "./Components/Carousel";

function App() {
  const [cart, setCart] = useState([]);
  const [isCarousel, setisCarousel] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log(isCarousel);
  let pros = [];

  console.log(counter);

  let p1 = {
    id: "11111",
    img: "/assets/image-product-1-thumbnail.jpg",
    img_big: {
      img_1: "/assets/image-product-1.jpg",
      img_2: "/assets/image-product-2.jpg",
      img_3: "/assets/image-product-3.jpg",
      img_4: "/assets/image-product-4.jpg",
    },
    price: "100 €",
    descrption:
      "Autumn Limited edition Autumn Limited edition Autumn Limited edition Autumn Limited edition",
    qtt: "3",
  };

  console.log("TEST App IMG " + p1);

  pros = [...pros, p1];
  console.log("TEST App PROS " + pros);
  useEffect(() => {
    setCart(pros);
  }, []);

  return (
    <div>
      <Header products={cart} counter={counter}></Header>
      <Product
        product={p1}
        onClick={setisCarousel}
        isBtncarousel={false}
        counter={setCounter}
        value={counter}
      />
      {isCarousel && (
        <div className="carousel-big w-100 h-100" onClose={setisCarousel}>
          <div className="btn-close-carousel--position">
            <button className="" onClick={() => setisCarousel(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <span className="flou d-block" />
          <Carousel classe="zIndex-4" isBtncarousel={true} />
        </div>
      )}
    </div>
  );
}

export default App;
