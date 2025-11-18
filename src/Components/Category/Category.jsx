import React, { useEffect, useState } from "react";

function Category() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://e-commerce-backened-4fih.onrender.com/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        console.log("category ka data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h2>CATEGORY</h2>
      <div>
        {category.map((item) => {
          return (
            <div>
              <p>{item.slug}</p>
              <img src={item.url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
