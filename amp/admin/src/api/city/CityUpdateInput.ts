import { BuildingUpdateManyWithoutCitiesInput } from "./BuildingUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  buildings?: BuildingUpdateManyWithoutCitiesInput;
  name?: string | null;
};
