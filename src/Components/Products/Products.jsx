import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";

function Products() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://e-commerce-backened-4fih.onrender.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.error(err));
  // }, []);

  useEffect(() => {
    fetch("https://e-commerce-backened-4fih.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 bg-gray-100">
      {products.map((item, index) => {
        return <Card item={item} index={index} />;
      })}
      <p>products</p>
    </div>
  );
}

export default Products;
