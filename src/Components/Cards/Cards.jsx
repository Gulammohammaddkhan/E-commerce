import React from "react";
import jeanfront from "../../assets/Images/Jeans1.png";

function Cards() {
  return (
    <div className="w-[400px] bg-[#f0f5ff]">
      <div>
        <img src={jeanfront} alt="" className="w-full h-fit" />
        <h3>URBAN DENIM</h3>
        <div>Men jean with light blue shade</div>
        <div>455</div>
        <div>
          <ul>
            <li>28</li>
            <li>30</li>
            <li>32</li>
            <li>34</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
