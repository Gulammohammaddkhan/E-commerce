import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://e-commerce-backened-4fih.onrender.com/products")
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
    <div className="grid grid-cols-3 gap-5 bg-gray-100">
      {products.map((item, index) => {
        return (
          <Link to={`/products/${item.id}`}>
            <Card item={item} index={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default Products;
