import React from "react";
import './_home.scss';

import { ReactComponent as BackToHome } from '../../../assets/icons/to-home.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

import { ReactComponent as Notifications } from '../../../assets/icons/notifications.svg';

function SearchRequest() {
  const searchValue = document.getElementById("search-input");
  console.log(searchValue.value);
}

const Home = () => {
  return (
    <div className="home-body">
      <button className="back-btn btn"><BackToHome/></button>

      <div 
        className="right-side"
        style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <div className="search-bar">
          <button onClick={SearchRequest}><Search/></button>
          <input id="search-input" type="search" className="search__input" placeholder="Search music, artist, albums..."/>
        </div>

        <button className="notifications-btn btn"><Notifications /></button>
      </div>
    </div>
  );
}

export default Home;