import { useEffect, useState } from "react";
import "../css/style.scss";
import Header from "./Layout/Header";

function App() {
  const [cart, setCart] = useState([]);

  let pros = [];

  let p1 = {
    id: "11111",
    img: "/assets/image-product-1-thumbnail.jpg",
    price: "100 €",
    descrption:
      "Autumn Limited edition Autumn Limited edition Autumn Limited edition Autumn Limited edition",
    qtt: "3",
  };
  let p2 = {
    id: "2222",
    img: "/assets/image-product-2-thumbnail.jpg",
    price: "200 €",
    descrption: "Autumn Limited edition",
    qtt: "2",
  };
  let p3 = {
    id: "33333",
    img: "/assets/image-product-3-thumbnail.jpg",
    price: "300 €",
    descrption: "Autumn Limited edition",
    qtt: "5",
  };

  pros = [...pros, p1];
  pros = [...pros, p2];
  pros = [...pros, p3];

  useEffect(() => {
    setCart(pros);
  }, []);

  return (
    <div>
      <Header products={cart}></Header>
      <div className="container"></div>
    </div>
  );
}

export default App;
