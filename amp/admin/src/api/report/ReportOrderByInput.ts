import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  buildingId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
