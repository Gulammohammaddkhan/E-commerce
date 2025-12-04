import React, { useState } from "react";
import { useSelector } from "react-redux";
import { calculateTotal } from "../../reducer";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { AiFillThunderbolt } from "react-icons/ai";

function Cart() {
  const cartProducts = useSelector((state) => state.cartProducts);
  const cartTotal = calculateTotal(cartProducts);
  // console.log("cartTotal", cartTotal);
  // console.log("first", cartProducts);

  return (
    <div className="h-screen">
      {cartProducts.length === 0 && (
        <p className="text-2xl font-semibold font-sans text-[#1c398e] py-6">
          {" "}
          ...Your cart is empty please add some{" "}
          <Link to={"/products"}>
            <button className="cursor-pointer hover:font-normal hover:bg-[#162556] hover:text-white py-2 px-4 rounded-lg hover:font-serif">
              Products
            </button>
          </Link>
        </p>
      )}
      {cartProducts.map((item) => {
        return (
          <Link to={`/products/${item.id}`}>
            <div className=" flex flex-row items-center justify-between m-10 px-8 py-2 rounded-2xl shadow-2xl shadow-gray-600 bg-white">
              <img src={item.images} className="w-24" />
              <p key={item.id} className="text-2xl font-semibold">
                {item.title}
              </p>
              <p className="text-[#00a63d] text-2xl font-semibold">
                ${item.price}
              </p>
            </div>
          </Link>
        );
      })}
      {cartTotal > 0 && (
        <p className="flex justify-end mr-16 text-2xl font-semibold">
          Total : <p className="text-[#00a63d] text-2xl font-semibold">$</p>
          <p className="text-[#00a63d] text-2xl font-semibold">
            {cartTotal.toFixed(2)}
          </p>
        </p>
      )}
      {/* <p>Total :{cartTotal} </p> */}
      {cartTotal > 0 && (
        <Button
          text="PAY NOW"
          backGroundColor="#fa661b"
          display="flex"
          flexDirection="row"
          icon={<AiFillThunderbolt size={20} />}
        />
        // paynow
        // </Button>
      )}
    </div>
  );
}

export default Cart;
