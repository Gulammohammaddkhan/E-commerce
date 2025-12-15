import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TiStar } from "react-icons/ti";
import Button from "../Button/Button";
import { IoMdCart } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import Card from "../Cards/Card";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState();
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setCategory(data.category);
        console.log("data", data);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    if (category) {
      fetch(`${import.meta.env.VITE_BASE_URL}/categories/${category}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("hgfhfhg", data);
          setCategoryProducts(data.products);
        })
        .catch((error) => console.log(error));
    }
  }, [category]);

  console.log("gfchchcf", categoryProducts);

  function addProductHanlder() {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  }

  return (
    product && (
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 sm:flex sm:flex-row  px-2 sm:h-screen sm:gap-2 ">
          <div className="hidden sm:block sm:sticky top-10 h-fit bg-[#f2f2f2] rounded-xl mt-2">
            {/* thumbnail */}
            <img
              src={product.thumbnail}
              alt="thumbnail-image"
              className="w-[200px]"
            />
          </div>
          <div className="sm:min-w-[35%] sm:w-[35%] md:min-w-[35%] md:w-[35%] lg:min-w-[35%] lg:w-[35%] lg:px-2 sm:h-fit sm:px-2 bg-[#f2f2f2] py-4 rounded-xl mt-2 sm:sticky top-10">
            <div className=" ml-4">
              {/* product-imge */}
              <img
                src={product.images[0]}
                alt="product-image"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-2  md:flex-row lg:flex-row justify-around">
              <div className="">
                <Button
                  clickHandler={addProductHanlder}
                  text="ADD TO CART"
                  backGroundColor="#ff9d00"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center "
                  width="200px sm:w-fit"
                  icon={<IoMdCart size={20} />}
                />
              </div>
              <div className="">
                <Button
                  text="BUY NOW"
                  backGroundColor="#fa661b"
                  display="flex"
                  flexDirection="row"
                  justifyContent="center "
                  width="200px sm:w-fit"
                  icon={<AiFillThunderbolt size={20} />}
                />
              </div>
            </div>
          </div>

          <div className=" border-l-1 border-l-gray-400 h-screen px-6 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
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
            <div className="text-red-400 pb-6">
              {product.warrantyInformation}
            </div>
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

        <div className="mt-5 md:mt-10">
          <h2 className="text-center text-2xl font-semibold text-[#4e38f5] font-sans">
            Similar Products
          </h2>
          <div className="grid grid-cols-1 mx-3 pt-5  gap-6 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            {categoryProducts &&
              categoryProducts.map((item, index) => {
                return (
                  <Link to={`/products/${item.id}`}>
                    <div className=" flex justify-center">
                      <Card item={item} index={index} />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetail;
