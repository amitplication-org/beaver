import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  building: BuildingWhereUniqueInput;
  name: string;
  user: UserWhereUniqueInput;
};
