import React from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export const func_tag = (restaurant) => {
  const tag_arr = restaurant.tag.split(",").map((v) => v.trim());

  const hash_string = tag_arr
    .filter((v) => v)
    .map((v) => "#" + v.trim())
    .join(" ");
  console.log(hash_string, "2");
  return hash_string;
};
function ShowingRestaurant() {
  const { restaurant } = useSelector((state) => state.restaurant);

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
            <Meta title={v.name} description={func_tag(v)} />
          </Card>
        ))}
    </div>
  );
}

export default ShowingRestaurant;
