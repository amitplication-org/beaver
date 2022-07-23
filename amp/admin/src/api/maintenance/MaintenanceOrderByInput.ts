import { SortOrder } from "../../util/SortOrder";

export type MaintenanceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  maintenanceType?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
