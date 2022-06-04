import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { BsGift } from "react-icons/bs";

export default function PanelHeader({ searchInput, searchItems }) {
  return (
    <div className="header-container">
      <div className="title">
        <BsPersonCircle />
        <p>iamneo.ai Talent Center</p>
      </div>
      <div className="float-right">
        <div className="search-bar">
          <button style={{ border: 0, backgroundColor: "transparent" }}>
            {" "}
            <IoIosSearch style={{}} />{" "}
          </button>
          <input
            type="text"
            placeholder="Search"
            style={{ border: 0 }}
            onChange={(e) => searchItems(e.target.value)}
            value={searchInput}
          ></input>
        </div>
        <div className="addNew-btn">
          <button>+ Add New</button>
        </div>
        <div className="voucher">
          <BsGift />
        </div>
      </div>
    </div>
  );
}
