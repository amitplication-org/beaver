import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  building?: BuildingWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
};
