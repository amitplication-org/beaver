import { BuildingListRelationFilter } from "../building/BuildingListRelationFilter";
import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  buildings?: BuildingListRelationFilter;
  bulletinBoard?: BulletinBoardWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
