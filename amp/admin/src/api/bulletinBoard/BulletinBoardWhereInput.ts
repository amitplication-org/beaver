import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type BulletinBoardWhereInput = {
  buildings?: BuildingWhereUniqueInput;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
};
