import React from "react";
import { Link } from "react-router-dom";

function Card({ item, index }) {
  console.log("item", item);

  return (
    <div
      className="w-full flex flex-col items-center justify-between w-full max-w-xs sm:max-w-sm 
      bg-white dark:bg-gray-800 
      rounded-2xl shadow-xl 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1 
      flex flex-col items-center 
      border border-gray-200 dark:border-gray-700"
    >
      <div>
        {/* Product Image */}
        <img
          src={item.images[0]}
          alt={item.title || "Product Image"}
          className="
        w-48 h-48 sm:w-56 sm:h-56 
        p-2 object-contain 
        rounded-lg 
        mx-auto mb-4 
        
      "
        />
      </div>
      <div
        key={`${item.id}-${index}`}
        className="
      px-4 py-6 text-center
    "
      >
        {/* Rating and Count */}
        <div className="flex justify-center gap-6 text-sm mb-3">
          <p className="text-center text-yellow-500 font-medium">
            {item.rating} ⭐
          </p>
        </div>

        {/* Title */}
        <h2
          className="
      font-extrabold text-center 
      text-xl text-gray-900 dark:text-white 
      mt-2 mb-2 
      line-clamp-2 // Title ko limit kiya
    "
        >
          {item.title}
        </h2>

        {/* Price */}
        <p className="font-bold text-3xl text-green-600 dark:text-green-400 mb-3">
          ${item.price}
        </p>

        {/* Description */}
        <p
          className="
      font-normal text-sm 
      text-gray-500 dark:text-gray-400 
      mt-1 text-center leading-relaxed 
      line-clamp-3 
    "
        >
          {item.description}
        </p>

        {/* Category */}
        <p
          className="
      text-xs 
      text-indigo-600 dark:text-indigo-400 
      font-semibold uppercase 
      tracking-wider 
      mt-3 
      px-3 py-1 
      bg-indigo-100 dark:bg-indigo-900 
      rounded-full
    "
        >
          {item.category}
        </p>
      </div>
    </div>
  );
}

export default Card;
