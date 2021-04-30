import React from "react";
import "./styles.css";

function Header() {
    return (
        <div>
    <div className="jumbotron jumbotron-fluid header" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i class="fas fa-address-book"></i> <b>Employee Directory</b></h1>
        <p className="lead">Search by first or last name...</p>
      </div>
    </div>
  </div>
    );
}

export default Header;