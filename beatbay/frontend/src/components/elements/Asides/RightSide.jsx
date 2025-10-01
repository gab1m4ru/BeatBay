import React from "react";

import "./_aside.scss";
import "./_fans.scss";
import UserProfileImg from "../../../assets/images/profile-img.png";
import JamesArthurImg from "../../../assets/images/artists/james-arthur.png";
import { ReactComponent as PremiumIcon } from "../../../assets/icons/premium.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";

const RightSide = () => {
  return (
    <aside
      className="aside-body"
      style={{ color: "#949494", fontWeight: "600", paddingRight: "30px" }}
    >
      <div className="user-profile">
        <img src={UserProfileImg} alt="User" draggable="false" />

        <div className="user-profile__info" style={{ marginLeft: "15px" }}>
          <h3 className="user-profile__name" style={{ color: "#fff" }}>
            James Rodriguez
          </h3>
          <div className="user-profile__status">
            <span style={{}}>Premium</span>
            <PremiumIcon />
          </div>
        </div>

        <ArrowIcon
          style={{ transform: "rotate(-90deg)", marginLeft: "20px" }}
        />
      </div>

      <div className="fans" style={{ marginTop: "40px" }}>
        <div className="fans__header">
          <h2 className="fans__title">Fans Also Like</h2>
          <button className="more">See All</button>
        </div>

        <div className="fans__artists">
          <img src={JamesArthurImg} alt="ARTIST" draggable='false'/>
          <div className="fans__artists-info">
            <h3 className="fans__artists-name">James Arthur</h3>
            <span className="fans__artists-followers">1.2M Followers</span>
          </div>
        </div>

        <div className="dots"></div>
      </div>
    </aside>
  );
};

export default RightSide;
