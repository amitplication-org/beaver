import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  building?: BuildingWhereUniqueInput;
  name?: string;
  user?: UserWhereUniqueInput;
};
