import React from "react";

export default function Button({
  type = "submit",
  children,
  isIcone = false,
  onclick,
  ...props
}) {
  let cN = "btn btn-";
  if (type === "submit") {
    cN += "primary";
  } else {
    cN += type;
  }

  return (
    <button className={cN} type={type} onClick={onclick}>
      {isIcone && (
        <span>
          <img
            className="icon icon__cart"
            src="./assets/icon-cart.svg"
            alt="chario"
          />
        </span>
      )}
      <div className="btn__title">{children}</div>
    </button>
  );
}
