import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Korean from "../pages/Korean";
import Innovative from "../pages/Innovative";
import Contemporary from "../pages/Contemporary";
import Sushi from "../pages/Sushi";
import Spanish from "../pages/Spanish";
import DetailType from "./DetailType";
import Upload from "../pages/Upload";
import { Button } from "antd";
import Restaurant from "../pages/Restaurant";
import aa from "../pages/aa";
import logo from "../public/images/logo.jpg";

function Main() {
  return (
    <BrowserRouter>
      <Link
        to="/"
        style={{
          lineHeight: "50px",
          verticalAlign: "middle",
          marginLeft: "10px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "40px", borderRadius: "50%" }}
        />
      </Link>
      <Link
        style={{
          textDecoration: "none",
          marginLeft: "20px",
          fontSize: "30px",
          verticalAlign: "middle",
        }}
        to="/upload"
      >
        Upload
      </Link>

      <hr />
      <br />
      <br />

      <Route path="/" component={Home} exact />
      <Route path="/upload" component={Upload} />
      <Switch>
        <Route path="/restaurant/detailinfo" component={DetailType} />
        <Route path="/restaurant/search" component={aa} />
        <Route path="/restaurant" component={Restaurant} />
      </Switch>

      {/* <Route path="/korea" component={Korean} />
      <Route path="/innovative" component={Innovative} />
      <Route path="/contemporary" component={Contemporary} />
      <Route path="/sushi" component={Sushi} />
      <Route path="/spanish" component={Spanish} /> */}
      <Route path="/food/:type" component={DetailType} />
    </BrowserRouter>
  );
}

export default Main;
