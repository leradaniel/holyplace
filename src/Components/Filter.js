import React from "react";
import { FilterItem } from "../Components/FilterItem";
import TagsJson from "../data/tags.json";

export const Filter = () => {
  let filtersContainer = TagsJson.map((tag) => {
    return <FilterItem key={tag.name} name={tag.name} id={tag.id} />;
  });
  return <form>{filtersContainer}</form>;
};
