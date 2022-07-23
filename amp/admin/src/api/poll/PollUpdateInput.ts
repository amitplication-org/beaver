import { BuildingUpdateManyWithoutPollsInput } from "./BuildingUpdateManyWithoutPollsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PollUpdateInput = {
  buildings?: BuildingUpdateManyWithoutPollsInput;
  content?: InputJsonValue;
  description?: string | null;
  name?: string;
  pollType?: "General" | "Maintenance" | "Committee";
  user?: UserWhereUniqueInput;
};
