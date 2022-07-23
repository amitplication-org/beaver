import { BuildingListRelationFilter } from "../building/BuildingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CityWhereInput = {
  buildings?: BuildingListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
