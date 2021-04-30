import React from "react";
import "./styles.css";

const Search = (props) => {

    return (
        <form>
    <div className="form-group search-widget">
      <div className="input-group mb-3">
      <i class="fas fa-search fa-lg srch"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder='Search directory for Employee'
          id="search"
        />
      </div>
    </div>
  </form>
    );
}

export default Search;