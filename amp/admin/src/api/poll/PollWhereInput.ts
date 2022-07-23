import { BuildingListRelationFilter } from "../building/BuildingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PollWhereInput = {
  buildings?: BuildingListRelationFilter;
  content?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  pollType?: "General" | "Maintenance" | "Committee";
  user?: UserWhereUniqueInput;
};
