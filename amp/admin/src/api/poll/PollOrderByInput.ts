import { SortOrder } from "../../util/SortOrder";

export type PollOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pollType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
