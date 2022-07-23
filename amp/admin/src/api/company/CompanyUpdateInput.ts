import { BuildingWhereUniqueInput } from "../building/BuildingWhereUniqueInput";
import { CustomerUpdateManyWithoutCompaniesInput } from "./CustomerUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  building?: BuildingWhereUniqueInput;
  customers?: CustomerUpdateManyWithoutCompaniesInput;
};
