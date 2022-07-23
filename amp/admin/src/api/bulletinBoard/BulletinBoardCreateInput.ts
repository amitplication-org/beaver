import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { MessageCreateNestedManyWithoutBulletinBoardsInput } from "./MessageCreateNestedManyWithoutBulletinBoardsInput";

export type BulletinBoardCreateInput = {
  building?: BuildingWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutBulletinBoardsInput;
};
