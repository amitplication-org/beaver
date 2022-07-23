import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { MessageUpdateManyWithoutBulletinBoardsInput } from "./MessageUpdateManyWithoutBulletinBoardsInput";

export type BulletinBoardUpdateInput = {
  building?: BuildingWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutBulletinBoardsInput;
};
