import React, { useState } from "react";
import { classNames, MultiSelect } from "pi-ui";
import PropTypes from "prop-types";
import { useReactiveSearchUser } from "./hooks";
import styles from "./SearchSelector.module.css";

const SearchSelector = ({ onChange, value, className, styles: extStyles }) => {
  const [inputValue, setInputValue] = useState("");
  const { results } = useReactiveSearchUser(inputValue, inputValue);
  const options = results.map((result) => ({
    value: result.id,
    label: `${result.username} | ${result.email}`
  }));
  // const options = [
  //   {
  //     label: "AAA",
  //     value: "AAA"
  //   },
  //   {
  //     label: "BBB",
  //     value: "BBB"
  //   },
  //   {
  //     label: "CCC",
  //     value: "CCC"
  //   },
  // ]
  return (
    <MultiSelect
      placeholder="Search by User"
      className={classNames(styles.select, className)}
      value={value}
      inputValue={inputValue}
      onInputChange={(newV) => setInputValue(newV)}
      onChange={onChange}
      options={options}
      styles={extStyles}
      searchable
      // noOptionsMessage={() =>
      //   inputValue === ""
      //     ? "Insert a username or email"
      //     : "No options available"
      // }
      // escapeClearsValue
    />
  );
};

SearchSelector.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
  className: PropTypes.string,
  styles: PropTypes.object
};

export default SearchSelector;
