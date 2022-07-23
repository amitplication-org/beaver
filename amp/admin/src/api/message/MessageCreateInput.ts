import { BuildingCreateNestedManyWithoutMessagesInput } from "./BuildingCreateNestedManyWithoutMessagesInput";
import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  buildings?: BuildingCreateNestedManyWithoutMessagesInput;
  bulletinBoard?: BulletinBoardWhereUniqueInput | null;
  content?: string | null;
  title?: string | null;
  user: UserWhereUniqueInput;
};
