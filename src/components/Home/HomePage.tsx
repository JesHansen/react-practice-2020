import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Jabber Dabber Administration</h1>
    <p>R, R og R for ekstra lækkerness.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Lær mere
    </Link>
  </div>
);

export default HomePage;
