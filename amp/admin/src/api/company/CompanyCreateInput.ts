import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CustomerCreateNestedManyWithoutCompaniesInput } from "./CustomerCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  building: BuildingWhereUniqueInput;
  customers?: CustomerCreateNestedManyWithoutCompaniesInput;
};
