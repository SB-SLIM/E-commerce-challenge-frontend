import React, { useState } from "react";
import Cart from "../Components/Cart/Cart";

export default function Header({ product }) {
  const [isShow, setShow] = useState(false);
  const [isCart, setCart] = useState(false);
  const handelClick = (e) => {
    let elem = document.getElementById("navbarSupportedContent");
    let elmFlou = document.getElementsByClassName("flou")[0];
    console.log(elmFlou);
    if (
      e.target.getAttribute("id") === "btnNavbar" ||
      e.target.parentElement.getAttribute("id") === "btnNavbar"
    ) {
      if (isShow === false) {
        isCart && setCart(false);
        elem.classList.add("show");
        elmFlou.classList.add("show");
      } else {
        elem.classList.remove("show");
        elmFlou.classList.remove("show");
      }
      setShow(!isShow);
    } else {
      if (isShow) {
        setShow(false);
        elem.classList.remove("show");
      }
      setCart(!isCart);
    }
  };

  return (
    <div className="header">
      <nav className="nav">
        <div className="container-fluid nav--d-flex">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="btnNavbar"
            onClick={handelClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#home">
            sneakers
          </a>
          <span className="flou" />
          <div
            className=" navbar-collapse  collapse collapse--position"
            id="navbarSupportedContent"
          >
            <button
              className="navbar-toggler navbar-btn-close--position"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="btnNavbar"
              onClick={handelClick}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <div className="">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " aria-current="page" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="header__right">
        <div className="cart">
          <a
            className="cart__link position-relative"
            href="#"
            onClick={handelClick}
            id="cart"
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
            {product.counter > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                {product.counter}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
          </a>
          <Cart isShow={isCart} id="cart" product={product} />
        </div>
        <div className="avatar">
          <img src="/assets/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
