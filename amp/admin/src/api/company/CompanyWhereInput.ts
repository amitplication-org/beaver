import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  building?: BuildingWhereUniqueInput;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
};
