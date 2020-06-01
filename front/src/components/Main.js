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

function Main() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link style={{ textDecoration: "none", marginLeft: "10px" }} to="/upload">
        Upload
      </Link>

      <hr />
      <br />
      <br />

      <Route path="/" component={Home} exact />
      <Route path="/upload" component={Upload} />
      <Switch>
        <Route path="/restaurant/detailinfo" component={DetailType} />
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
