import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { MessageCreateNestedManyWithoutBulletinBoardsInput } from "./MessageCreateNestedManyWithoutBulletinBoardsInput";

export type BulletinBoardCreateInput = {
  buildings?: BuildingWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutBulletinBoardsInput;
};
