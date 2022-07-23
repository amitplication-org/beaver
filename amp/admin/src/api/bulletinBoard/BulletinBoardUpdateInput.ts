import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { MessageUpdateManyWithoutBulletinBoardsInput } from "./MessageUpdateManyWithoutBulletinBoardsInput";

export type BulletinBoardUpdateInput = {
  buildings?: BuildingWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutBulletinBoardsInput;
};
