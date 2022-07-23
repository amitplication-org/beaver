import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MaintenanceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  maintenanceType?: "Clean" | "PestControl" | "Gardening" | "Design";
  name?: StringFilter;
};
