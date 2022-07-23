import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type BulletinBoardWhereInput = {
  building?: BuildingWhereUniqueInput;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
};
