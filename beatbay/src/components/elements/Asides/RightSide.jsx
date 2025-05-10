import React from "react";

import "./_aside.scss";
import UserProfileImg from "../../../assets/images/profile-img.png"
import { ReactComponent as PremiumIcon } from "../../../assets/icons/premium.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";

const RightSide = () => {
  return (
    <aside
      className="aside-body"
      style={{ color: "#949494", fontWeight: "600", paddingRight: "30px" }}
    >
      <div className="user-profile">
        <img src={UserProfileImg} alt="User" draggable='false'/>

        <div className="user-profile__info" style={{ marginLeft: "15px" }}>
          <h3 className="user-profile__name" style={{ color: "#fff" }}>James Rodriguez</h3>
          <div className="user-profile__status">
            <span style={{  }}>Premium</span>
            <PremiumIcon />
          </div>
        </div>

        <ArrowIcon style={{ transform: "rotate(-90deg)", marginLeft: "20px" }} />
      </div>
    </aside>
  );
};

export default RightSide;