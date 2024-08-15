// ButtonCheckout.js
"use client";
import React from "react";

const ButtonCheckout = () => {
  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/6oEbMi8Ea6gZg7u4gh";
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
    >
      Pagar
    </button>
  );
};

export default ButtonCheckout;
