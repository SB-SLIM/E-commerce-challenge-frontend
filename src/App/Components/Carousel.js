import React, { useState } from "react";

export default function Carousel({ imgs, onClick, classe, isBtncarousel }) {
  let className = "product--padding col-12 col-md-6 mw-carousel-600 " + classe;
  return (
    <div className={className}>
      <div
        id="carouselControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* FIXME: boucle */}
        {/* {
          <div className="carousel-inner">
            {imgs.map((i, key) => (
            <div className="carousel-item active">
              <img
                src="/assets/image-product-1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            ))}
          </div>
        } */}
        <div className="carousel-inner" onClick={() => onClick(true)}>
          <div className="carousel-item active" id="img-1">
            <img
              src="./assets/image-product-1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item " id="img-2">
            <img
              src="./assets/image-product-2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item " id="img-3">
            <img
              src="./assets/image-product-3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item " id="img-4">
            <img
              src="./assets/image-product-4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        {isBtncarousel && (
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
        )}
        {isBtncarousel && (
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        )}
      </div>
      <div className="carousel-nav">
        <div className="carousel-nav-item">
          <a
            className="carousel__link"
            data-bs-target="#carouselControls"
            data-bs-slide-to="0"
            href="#"
          >
            <img
              src="./assets/image-product-1-thumbnail.jpg"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-nav-item">
          <a
            className="carousel__link"
            data-bs-target="#carouselControls"
            data-bs-slide-to="1"
            href="#"
          >
            <img
              src="./assets/image-product-2-thumbnail.jpg"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-nav-item">
          <a
            className="carousel__link"
            href="#"
            data-bs-target="#carouselControls"
            data-bs-slide-to="2"
          >
            <img
              src="./assets/image-product-3-thumbnail.jpg"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
        <div className="carousel-nav-item">
          <a
            className="carousel__link"
            href="#"
            data-bs-target="#carouselControls"
            data-bs-slide-to="3"
          >
            <img
              src="./assets/image-product-4-thumbnail.jpg"
              className="d-block w-100"
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>
  );
}
