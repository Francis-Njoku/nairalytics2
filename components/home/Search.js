import React from 'react';
import SearchIcon from "../../assets/images/icons/search.svg";

const Search = () => (
  <div className="row justify-content-center">
    <div className="col-md-10 col-sm-12">
      <div className="input-group input-group--with-border">
        <input
          type="text"
          placeholder="Search all indicators"
          className="form-control form__input form__input--no-border form__input--big form__input--with-append"
        />
        <div className="input-group-append form__append">
          <SearchIcon />
        </div>
      </div>
    </div>
  </div>
);

 export default Search;