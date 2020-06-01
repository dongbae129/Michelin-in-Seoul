import React, { useEffect } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { GET_DETAIL_INFO_REQUEST } from "../reducers/restaurant";
import star3 from "../public/images/star3.jpg";
import star1 from "../public/images/star1.jpg";
import star2 from "../public/images/star2.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { MdAccessTime, MdDescription } from "react-icons/md";

function DetailType(props) {
  const { restaurant } = useSelector((state) => state.restaurant);
  let query = queryString.parse(props.location.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_INFO_REQUEST,
      data: query.name,
    });
  }, []);

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          width: "200px",
          height: "160px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <strong style={{ fontSize: "32px", marginRight: "10px" }}>
          {restaurant && restaurant.name}
        </strong>
        <span style={{ color: "#9a9a9a" }}>
          {restaurant && restaurant.foodtype}
        </span>
        <div>
          <div style={{ margin: "0 auto", width: "100px" }}>
            <img
              src={star3}
              alt="star"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid black",
          width: "800px",
          height: "600px",
          margin: "0 auto",
        }}
      >
        <div>
          <AiOutlinePhone />
          {restaurant.DetailInfo && restaurant.DetailInfo.phonenumber}
        </div>
        <div>
          <span>
            <MdAccessTime />
            {restaurant.DetailInfo && restaurant.DetailInfo.weekday}
          </span>
          <span>{restaurant.DetailInfo && restaurant.DetailInfo.weekend}</span>
        </div>
        <div>
          <MdDescription />
          {restaurant.DetailInfo && restaurant.DetailInfo.description}
        </div>
      </div>
    </div>
  );
}

export default DetailType;
