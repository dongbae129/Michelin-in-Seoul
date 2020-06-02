import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import korean from "../public/images/korean.jpg";
import spanish from "../public/images/spanish.jpg";
import sushi from "../public/images/sushi.jpg";
import innovative from "../public/images/innovative.jpg";
import contemporary from "../public/images/contemporary.png";
import { useDispatch } from "react-redux";
import { SEARCH_TARGETS_REQUEST } from "../reducers/restaurant";
import { Button } from "antd";

const images = [korean, spanish, sushi, innovative, contemporary];
const foodType = ["korea", "spanish", "sushi", "innovative", "contemporary"];
const HomeRending = (num) => {
  let a = [];
  Array(num)
    .fill(1)
    .map((v, i) => {
      if (num === 3) {
        a.push(
          <Link key={i + 3} to={`/restaurant?type=${foodType[i]}`}>
            <img
              style={{ width: "200px", height: "150px", margin: "10px" }}
              key={i + 3}
              alt="img"
              src={images[i]}
            />
          </Link>
        );
        return a;
      }
      a.push(
        <Link key={i} to={`/restaurant?type=${foodType[i + 3]}`}>
          {" "}
          <img
            style={{ width: "200px", height: "150px", margin: "10px" }}
            key={i}
            alt="img"
            src={images[i + 3]}
          />
        </Link>
      );
    });
  return a;
};
const typeRending = (e) => {
  let target = e.target;
};
function Home() {
  const [search, setSearch] = useState("");
  const searchInput = useRef();
  const dispatch = useDispatch();
  const onSetSearch = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitSearch = (e) => {
    // e.preventDefault();
    if (e.keyCode === 13) {
      dispatch({
        type: SEARCH_TARGETS_REQUEST,
        data: search,
      });
      searchInput.current.click();
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <input
          type="text"
          onKeyDown={onSubmitSearch}
          value={search}
          onChange={onSetSearch}
          placeholder="검색"
          style={{
            // display: "block",
            width: "500px",
            height: "30px",

            fontSize: "1.3rem",
            textAlign: "center",
          }}
        />
        <Link to="/aa">
          <Button ref={searchInput}>검색</Button>
        </Link>
      </div>

      <div>
        <div
          onClick={typeRending}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {HomeRending(3)}
        </div>
        <div
          onClick={typeRending}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {HomeRending(2)}
        </div>
      </div>
    </>
  );
}

export default Home;
