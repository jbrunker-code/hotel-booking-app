import React from "react";
import Filter from "./Filter.js";
import { filterOptions } from "../data.js";

var FiltersList = (props) => {
  var renderFilter = (filter) => {
    var isChecked = props.selectedFilters.includes(filter.key);
    return (
      <Filter
        key={filter.key}
        toggleFilter={props.toggleFilter}
        filter={filter}
        isChecked={isChecked}
      />
    );
  };
  var filterListElements = filterOptions.map(renderFilter);
  return (
    <div className="filters">
      <h5 className="filters__header">Filter By:</h5>
      <hr />
      <ul className="filters-list">{filterListElements}</ul>
    </div>
  );
};

export default FiltersList;
