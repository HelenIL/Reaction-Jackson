import React from "react";

function Header() {
    return (
        <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b>Employee Directory</b></h1>
        <p className="lead">Search by first or last name..</p>
      </div>
    </div>
  </div>
    );
}

export default Header;