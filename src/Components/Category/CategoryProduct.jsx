import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../Cards/Card";

const CategoryProduct = () => {
  const [productCategory, setProductCategory] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    fetch(
      `https://e-commerce-backened-4fih.onrender.com/categories/${category}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setProductCategory(data.products);
      })
      .catch((error) => {
        return console.log("error", error);
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center py-10 text-2xl font-semibold font-sans text-[#1d398f]">
        Category Products
      </h2>
      <div className="grid grid-cols-3 cursor-pointer">
        {productCategory?.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default CategoryProduct;
