import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://e-commerce-backened-4fih.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  });
  //   fetch("https://e-commerce-backened-4fih.onrender.com/products", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify(),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  return (
    <div>
      {products.map((item) => {
        return (
          <div key={item.key}>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
