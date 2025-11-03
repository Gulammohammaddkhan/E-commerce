import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import Button from "../Button/Button";
import { IoMdCart } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://e-commerce-backened-4fih.onrender.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        console.log("data", data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    product && (
      <div className="flex px-2">
        <div className="">
          {/* thumbnail */}
          <img
            src={product.thumbnail}
            alt="thumbnail-image"
            className="w-[200px]"
          />
        </div>
        <div className="">
          {/* product-imge */}
          <img src={product.images[0]} alt="product-image" />
          <div className="flex justify-around">
            <Button
              text="ADD TO CART"
              backGroundColor="#ff9d00"
              icon={<IoMdCart size={20} />}
            />
            <Button
              text="BUY NOW"
              backGroundColor="#fa661b"
              icon={<AiFillThunderbolt size={20} />}
            />
          </div>
        </div>
        <div className="px-2">
          <div className="text-4xl font-semibold font-sans pt-4 pb-6">
            {product.title}
          </div>
          <div className="flex gap-4 pb-6">
            <div className="text-[#4e38f5] bg-[#e0e8ff] rounded-4xl px-3 py-1 font-semibold font-sans">
              {product.tags[0]}
            </div>
            <div className="text-green-900 bg-green-100 rounded-4xl px-3 py-1 font-semibold font-sans">
              {product.tags[1]}
            </div>
          </div>
          <span className="text-white bg-green-600 py-1 px-1.5 font-semibold rounded-md">
            {" "}
            {`⭐${product.rating}`}
          </span>
          <div className="text-[#00a63d] font-bold text-3xl pt-4">
            ${product.price}
          </div>
          <div className="flex gap-2">
            <span className="text-gray-500">discount:</span>
            <div className="text-red-500 font-semibold">{`${product.discountPercentage}%`}</div>
          </div>

          <div className="text-4xl text-[#4e38f5] font-bold font-sans py-6">
            {product.brand}
          </div>

          <div className="pb-3">
            <div className="text-center text-2xl font-semibold pb-2">
              Product Description
            </div>
            <div className="text-gray-500 text-md font-sans">
              {product.description}
            </div>
          </div>
          <div className="pb-4">
            <div className="flex gap-2 ">
              <span className="text-gray-500 font-semibold font-sans">
                depth:
              </span>
              <div className="font-bold text-black">{`${product.dimensions.depth}`}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 font-semibold font-sans">
                width:
              </span>
              <div className="font-bold text-black">{`${product.dimensions.width}`}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 font-semibold font-sans">
                height:
              </span>
              <div className="font-bold text-black">{`${product.dimensions.height}`}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 font-semibold font-sans">
                weight:
              </span>
              <div className="font-bold text-black">{`${product.weight} gm`}</div>
            </div>
          </div>
          <div className="flex pb-2">
            <span className="text-gray-500 font-semibold font-sans">
              minimumOrderQuantity=
            </span>
            <div className="font-bold text-black">{`${product.minimumOrderQuantity}`}</div>
          </div>
          <div className="text-red-600 pb-2 ">{product.returnPolicy}</div>
          <div className="text-black font-bold pb-2">
            {product.shippingInformation}
          </div>
          <div className="text-red-400 pb-6">{product.warrantyInformation}</div>
          <div>
            <h2 className="text-center text-3xl font-semibold text-gray-600">
              Reviews
            </h2>
            <div className="py-4">
              <span className="w-fit px-2 font-semibold rounded-2xl flex items-center bg-green-300 text-white">
                <span>
                  <TiStar />
                </span>
                <div>{`${product.reviews[0].rating}`}</div>
              </span>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  comment:
                </span>
                <div className="font-semibold text-red-600">{`${product.reviews[0].comment}`}</div>
              </div>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  ReviewerName:
                </span>
                <div className="font-bold text-black">{`${product.reviews[0].reviewerName}`}</div>
              </div>
            </div>
            <div className="py-4">
              <span className="w-fit px-2 font-semibold rounded-2xl flex items-center bg-green-300 text-white">
                <span>
                  <TiStar />
                </span>
                <div>{`${product.reviews[0].rating}`}</div>
              </span>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  comment:
                </span>
                <div className="font-semibold text-green-600">{`${product.reviews[1].comment}`}</div>
              </div>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  ReviewerName:
                </span>
                <div className="font-bold text-black">{`${product.reviews[1].reviewerName}`}</div>
              </div>
            </div>
            <div className="py-4">
              <span className="w-fit px-2 font-semibold rounded-2xl flex items-center bg-green-300 text-white">
                <span>
                  <TiStar />
                </span>
                <div>{`${product.reviews[0].rating}`}</div>
              </span>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  comment:
                </span>
                <div className="font-semibold text-green-600">{`${product.reviews[2].comment}`}</div>
              </div>
              <div className="flex">
                <span className="text-gray-500 font-semibold font-sans">
                  ReviewerName:
                </span>
                <div className="font-bold text-black">{`${product.reviews[2].reviewerName}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
