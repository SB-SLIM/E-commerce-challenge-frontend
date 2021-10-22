import React, { useState } from "react";

export default function ButtonCounter({ counter, value }) {
  const handelClick = (e) => {
    if (e.target.id === "btn-minus") {
      value = minus(value);
      counter(value);
    } else if (e.target.id === "btn-plus") {
      value = plus(value);
      counter(value);
    }
  };

  return (
    <div className="buttonCounter bg-light-grayish-blue">
      <button
        type="submit"
        className="btn__counter "
        onClick={handelClick}
        id="btn-minus"
      >
        <span className="icon-minus"></span>
      </button>
      <input
        type="number"
        value={value}
        min="0"
        max="9"
        id="counter"
        className="input__counter "
        disabled
      />
      <button className="btn__counter " id="btn-plus" onClick={handelClick}>
        <span className="icon-plus"></span>
      </button>
    </div>
  );
}
export function minus(count) {
  if (count > 0) {
    return count - 1;
  } else {
    return count;
  }
}
export function plus(count) {
  if (count < 9) {
    return count + 1;
  } else {
    return count;
  }
}
