import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../Cards/Card";

const CategoryProduct = () => {
  const [productCategory, setProductCategory] = useState([]);
  const { category } = useParams();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://e-commerce-backened-4fih.onrender.com/categories/${category}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductCategory(data.products);
        console.log("datas", data.products);
      })
      .catch((error) => {
        return console.log("error", error);
      });
  }, [category]);

  useEffect(() => {
    fetch(`https://e-commerce-backened-4fih.onrender.com/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(" productId data", data.products);
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("userName")) {
      {
        navigate("/login");
      }
    }
  }, []);
  return (
    <div>
      <h2 className="text-center py-10 text-2xl font-semibold font-sans text-[#1d398f]">
        Category Products
      </h2>

      <div className="grid grid-cols-3 cursor-pointer">
        {productCategory?.map((item, index) => {
          return (
            <Link to={`/products/${item.id}`}>
              {" "}
              <Card item={item} index={index} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryProduct;
