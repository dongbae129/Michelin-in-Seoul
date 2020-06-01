import React, { useEffect } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { GET_RESTARAURANT_INFO_REQUEST } from "../reducers/restaurant";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
function Restaurant(props) {
  useEffect(() => {
    dispatch({
      type: GET_RESTARAURANT_INFO_REQUEST,
      data: query.type,
    });
  }, []);
  const { restaurant } = useSelector((state) => state.restaurant);
  const query = queryString.parse(props.location.search);
  const dispatch = useDispatch();

  console.log(restaurant);
  return (
    <div
      style={{
        display: "flex",
        width: "900px",
        flexWrap: "wrap",
        margin: "0 auto",
      }}
    >
      {restaurant.map &&
        restaurant.map((v, i) => (
          <Card
            key={i}
            hoverable
            style={{ width: "204px", margin: "10px" }}
            cover={
              <Link to={`/restaurant/detailinfo?name=${v.name}`}>
                <img
                  style={{ width: "100%", height: "225px" }}
                  alt="example"
                  src={`http://localhost:8010/${v.Images[0].src}`}
                />
              </Link>
            }
          >
            <Meta title={v.name} description={v.DetailInfo.description} />
          </Card>
        ))}
    </div>
  );
}

export default Restaurant;
