import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { RiStarHalfLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";

function Testimonial() {
  const [page, setPage] = useState(0);
  function pageHandler() {
    testimonials.slice(0, 3);
  }
  const testimonials = [
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      ),
      text: " “Fantastic experience with Mkart! I tried to find if the products are original or not in every way I can and is known to me and the products happened to be authentic by my inspection which I believe is true. This site is the only site which I look forward to when finding authentic products to buy in the online market, in the era of counterfeit products.” ",
      name: "Kalim khan",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarHalfLine />
        </div>
      ),
      text: " “Amazing shopping with M Kart! I checked every small detail to confirm whether the items were original or not, and all products turned out to be completely authentic according to my inspection, which I trust. In today’s online world full of fake items, this is the only website where I confidently shop for genuine products.” ",
      name: "Arqam",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      ),
      text: "“I was skeptical at the start while ordering from Belvish but later they wronged me on all my doubts. The delivery was fast and the customer service is so amazing. They are personally available at your service. The products are 100% genuine and plus the complimentary samples that you get are cherry on top. Thanks a lot for existing !!.”",
      name: "Ajaz kadri",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      ),
      text: "“Recently made a purchase from Belvish and was mightily impressed by the top notch services - superb communication, swift delivery,safe and sturdy packaging, and of course a very good deal.Absolutely no qualms about the authenticity of the perfume. They are one of the best in this sphere.”",
      name: "Sajid Shaikh",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      ),
      text: " “Highly satisfied with M Kart! I inspected the products in every possible way known to me, and they passed all checks for originality. I truly believe they sell authentic items. In an online era filled with fake and duplicate goods, this website is the only place I trust for safe and genuine fashion shopping.”",
      name: "Misbah Momin",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarHalfLine />
        </div>
      ),
      text: "“Great experience with M Kart! I tried multiple ways to verify whether the products were real or not, and according to my inspection they are completely authentic. I strongly believe the quality is original. In today’s online market full of counterfeit sellers, this is the only fashion site I depend on for real products”",
      name: "Pankaj Mishra",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
        </div>
      ),
      text: "“Really happy with M Kart! I checked the fabric, print quality and finishing to confirm authenticity, and everything appeared original as per my inspection. I trust what I received. In a market where fake products are common, this is the only online store I look forward to when buying authentic fashion items.”",
      name: "Amit Khushwah",
    },
    {
      rating: (
        <div className="flex py-2 text-blue-900">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarHalfLine />
        </div>
      ),
      text: "“Fantastic service by M Kart! I verified the products using every method I know to confirm if they were genuinely original, and all items passed my inspection truthfully. I believe their quality is real. In a world full of counterfeit fashion, this is the only site I trust for purchasing real and authentic products.” ",
      name: "Aqsa Azaam",
    },
  ];
  return (
    <div className=" py-16 overflow-scroll">
      <div>
        <h2 className="text-center text-4xl font-semibold font-serif text-blue-900">
          Testimonial
        </h2>
        <div className="px-14">
          <div className="grid grid-flow-col overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 px-10 py-14 overflow-x-scroll">
            {testimonials.map((item, index) => {
              return (
                <div className="w-[350px] bg-indigo-100 flex flex-col items-center px-4 py-4 gap-2 rounded-2xl">
                  <div>{item.rating}</div>{" "}
                  <p className="text-gray-500 p-4">{item.text}</p>
                  <h3 className="font-semibold font-serif text-blue-900">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="flex justify-center gap-2 text-[#52a3ff]">
          <span className=" flex px-1.5 py-1  bg-blue-100 rounded-2xl border-1 border-blue-500 ">
            <button
              onClick={pageHandler}
              className="cursor-pointer  hover:scale-110"
            >
              <GoDotFill size={"30"} />
            </button>
            <button className="cursor-pointer  hover:scale-110">
              <GoDotFill size={"30"} />
            </button>
            <button className="cursor-pointer  hover:scale-110">
              <GoDotFill size={"30"} />
            </button>
          </span>
        </div> */}

        {/* <div className="grid grid-cols-3  gap-4 px-10 py-14">
          <div className="w-[350px]  flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              “Fantastic experience with Mkart! I tried to find if the products
              are original or not in every way I can and is known to me and the
              products happened to be authentic by my inspection which I believe
              is true. This site is the only site which I look forward to when
              finding authentic products to buy in the online market, in the era
              of counterfeit products.”
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Kalim khan
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarHalfLine />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              “Amazing shopping with M Kart! I checked every small detail to
              confirm whether the items were original or not, and all products
              turned out to be completely authentic according to my inspection,
              which I trust. In today’s online world full of fake items, this is
              the only website where I confidently shop for genuine products.”
            </p>
            <h3 className="font-semibold font-serif text-blue-900">Arqam</h3>
          </div>
          <div className="w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              “I was skeptical at the start while ordering from Belvish but
              later they wronged me on all my doubts. The delivery was fast and
              the customer service is so amazing. They are personally available
              at your service. The products are 100% genuine and plus the
              complimentary samples that you get are cherry on top. Thanks a lot
              for existing !!.”
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Ajaz Kadri
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              {" "}
              “Recently made a purchase from Belvish and was mightily impressed
              by the top notch services - superb communication, swift delivery,
              safe and sturdy packaging, and of course a very good deal.
              Absolutely no qualms about the authenticity of the perfume. They
              are one of the best in this sphere.”{" "}
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Sajid Shaikh
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              {" "}
              “Highly satisfied with M Kart! I inspected the products in every
              possible way known to me, and they passed all checks for
              originality. I truly believe they sell authentic items. In an
              online era filled with fake and duplicate goods, this website is
              the only place I trust for safe and genuine fashion shopping.”{" "}
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Misbah Momin
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarHalfLine />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              {" "}
              “Great experience with M Kart! I tried multiple ways to verify
              whether the products were real or not, and according to my
              inspection they are completely authentic. I strongly believe the
              quality is original. In today’s online market full of counterfeit
              sellers, this is the only fashion site I depend on for real
              products”{" "}
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Pankaj Pandey
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              {" "}
              “Really happy with M Kart! I checked the fabric, print quality and
              finishing to confirm authenticity, and everything appeared
              original as per my inspection. I trust what I received. In a
              market where fake products are common, this is the only online
              store I look forward to when buying authentic fashion items.”{" "}
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Amit Khushwah
            </h3>
          </div>
          <div className=" w-[350px] flex flex-col items-center text-center bg-indigo-100 p-4 rounded-2xl">
            <div className="flex py-2 text-blue-900">
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarFill />
              </div>
              <div>
                <RiStarHalfLine />
              </div>
            </div>
            <p className="text-gray-500 p-4">
              {" "}
              “Fantastic service by M Kart! I verified the products using every
              method I know to confirm if they were genuinely original, and all
              items passed my inspection truthfully. I believe their quality is
              real. In a world full of counterfeit fashion, this is the only
              site I trust for purchasing real and authentic products.”{" "}
            </p>
            <h3 className="font-semibold font-serif text-blue-900">
              Aqsa Azaam
            </h3>
          </div>
        </div> */}
      </div>
      {/* <div className="flex justify-center gap-2 text-[#52a3ff]">
        <span className=" flex px-1.5 py-1  bg-blue-100 rounded-2xl border-1 border-blue-500 ">
          <button className="cursor-pointer  hover:scale-110">
            <GoDotFill size={"30"} />
          </button>
          <button className="cursor-pointer  hover:scale-110">
            <GoDotFill size={"30"} />
          </button>
          <button className="cursor-pointer  hover:scale-110">
            <GoDotFill size={"30"} />
          </button>
        </span>
      </div> */}
    </div>
  );
}

export default Testimonial;
