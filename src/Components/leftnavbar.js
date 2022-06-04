import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

export default function LeftNavBar() {
  return (
    <>
      <div className="menu-bar">
        <div className="menu-list">
          <div className="profile">
            <BsPersonCircle />
          </div>
          <div className="report">
            {" "}
            <MdArticle />
          </div>
          <div className="jobs">
            {" "}
            <MdWorkOutline />
          </div>
          <div className="people">
            {" "}
            <BsFillPeopleFill />
          </div>
          <div className="setting">
            {" "}
            <AiFillSetting />
          </div>
        </div>
        <div className="menu-footer">
          <div className="help">
            {" "}
            <FiHelpCircle />
          </div>
          <div className="query">
            {" "}
            <MdOutlineMessage />
          </div>
          <div className="apps">
            {" "}
            <TbGridDots />
          </div>
        </div>
      </div>
    </>
  );
}
