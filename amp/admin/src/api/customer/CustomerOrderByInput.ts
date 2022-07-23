import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  customerType?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
