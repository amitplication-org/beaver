import { BuildingUpdateManyWithoutMessagesInput } from "./BuildingUpdateManyWithoutMessagesInput";
import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  buildings?: BuildingUpdateManyWithoutMessagesInput;
  bulletinBoard?: BulletinBoardWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput;
};
