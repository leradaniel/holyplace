import React from "react";

export const FilterItem = ({ name }) => {
  return (
    <>
      <label>
        <input type="checkbox" />
        {name}
      </label>
    </>
  );
};
