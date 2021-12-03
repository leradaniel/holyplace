import React from "react";
import { FilterItem } from "../Components/FilterItem";
import TagsJson from "../data/tags.json";

export const Filter = () => {
  return (
    <form>
      {TagsJson.map((tag) => {
        return <FilterItem key={tag.name} name={tag.name} id={tag.id} />;
      })}
    </form>
  );
};
