import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // localStorage.getItem("userName");
    if (!localStorage.getItem("userName")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className=" grid grid-cols-1 items-center items-stretch py-5 justify-center px-2 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-3 bg-gray-100">
      {products.map((item, index) => {
        return (
          <Link className="flex justify-center" to={`/products/${item.id}`}>
            <Card item={item} index={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
