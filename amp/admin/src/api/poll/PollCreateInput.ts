import { BuildingCreateNestedManyWithoutPollsInput } from "./BuildingCreateNestedManyWithoutPollsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PollCreateInput = {
  buildings?: BuildingCreateNestedManyWithoutPollsInput;
  content: InputJsonValue;
  description?: string | null;
  name: string;
  pollType: "General" | "Maintenance" | "Committee";
  user: UserWhereUniqueInput;
};
