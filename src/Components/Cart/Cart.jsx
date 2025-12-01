import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log("first", cartProducts);
  return cartProducts.map((item) => {
    return (
      <div className="flex flex-row items-center justify-between m-10 px-8 py-2 rounded-2xl shadow-2xl shadow-gray-600 bg-[#f2f3f5]">
        <img src={item.images} className="w-24" />
        <p key={item.id} className="text-2xl font-semibold">
          {item.title}
        </p>
        <p className="text-[#00a63d] text-2xl font-semibold">${item.price}</p>
      </div>
    );
  });
}

export default Cart;
