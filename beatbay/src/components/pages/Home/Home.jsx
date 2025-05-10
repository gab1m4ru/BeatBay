import React from "react";
import './Home.css';

import { ReactComponent as ArrowBack } from '../../../assets/icons/back.svg';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';

function SearchRequest() {
  const searchValue = document.getElementById("search-input");
  console.log(searchValue.value);
}

const Home = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "30px" }}>
      <button className="back-btn"><ArrowBack/></button>

      <div className="search-bar">
        <button onClick={SearchRequest}><Search/></button>
        <input id="search-input" type="search" className="search__input" placeholder="Search music, artist, albums..."/>
      </div>
    </div>
  );
}

export default Home;