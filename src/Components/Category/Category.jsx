import React, { useEffect, useState } from "react";
import beauty from "../../assets/Images/Beauty.png";
import fragrances from "../../assets/Images/Perfumes.png";
import furniture from "../../assets/Images/Furniture.png";
import grocery from "../../assets/Images/Grocery.png";
import homeDecoration from "../../assets/Images/HomeDecoration.png";
import kitchen from "../../assets/Images/Kitchen.png";
import laptop from "../../assets/Images/Laptop.png";
import mensShirt from "../../assets/Images/MensShirt.png";
import mensShoes from "../../assets/Images/MensShoes.png";
import mensWatches from "../../assets/Images/MenWatches.png";
import mobileAccessories from "../../assets/Images/MobileAccessories.png";
import motorcycles from "../../assets/Images/Motorcycles.png";
import skinCare from "../../assets/Images/SkinCare.png";
import mobiles from "../../assets/Images/Mobiles.png";
import sports from "../../assets/Images/Sports.png";
import sunglasses from "../../assets/Images/Sunglasses.png";
import tablets from "../../assets/Images/Tablets.png";
import top from "../../assets/Images/Top.png";
import vehicle from "../../assets/Images/Vehicle.png";
import ladiesBag from "../../assets/Images/LadiesBag.png";
import womenDress from "../../assets/Images/WomenDress.png";
import womenJewlry from "../../assets/Images/WomenJewlry.png";
import womenShoes from "../../assets/Images/WomenShoes.png";
import womenWatches from "../../assets/Images/WomenWatches.png";
import { Link, useNavigate } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  const categoryImages = {
    beauty: beauty,
    fragrances: fragrances,
    furniture: furniture,
    groceries: grocery,
    "home-decoration": homeDecoration,
    "kitchen-accessories": kitchen,
    laptops: laptop,
    "mens-shirts": mensShirt,
    "mens-shoes": mensShoes,
    "mens-watches": mensWatches,
    "mobile-accessories": mobileAccessories,
    motorcycle: motorcycles,
    "skin-care": skinCare,
    smartphones: mobiles,
    "sports-accessories": sports,
    sunglasses: sunglasses,
    tablets: tablets,
    tops: top,
    vehicle: vehicle,
    "womens-bags": ladiesBag,
    "womens-dresses": womenDress,
    "womens-jewellery": womenJewlry,
    "womens-shoes": womenShoes,
    "womens-watches": womenWatches,
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({
          ...item,
          image: categoryImages[item.slug],
        }));
        setCategories(updated);
        console.log("category ka data", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center py-10 text-3xl font-semibold font-sans text-[#1d398f] ">
        CATEGORY
      </h2>
      <div className="px-10 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2  lg:grid lg:grid-cols-3  2xl:grid 2xl:grid-cols-4 gap-8 text-center  ">
        {categories.map((item) => {
          return (
            <Link
              className="flex justify-center"
              to={`/products/category/${item?.slug}`}
            >
              <div
                className="w-fit border-[#cbe3ff] bg-[#f2f3f5]  border rounded-lg shadow  transition-all duration-200 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                key={item?.slug}
              >
                <img
                  src={item?.image}
                  alt=""
                  className="w-[350px] h-[300px] rounded-t-lg"
                />
                <h3 className="text-2xl font-semibold font-sans py-2 text-[#1c398e]">
                  {item?.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
