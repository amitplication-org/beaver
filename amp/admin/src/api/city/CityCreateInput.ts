import { BuildingCreateNestedManyWithoutCitiesInput } from "./BuildingCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  buildings?: BuildingCreateNestedManyWithoutCitiesInput;
  name?: string | null;
};
