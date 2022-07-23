import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  bulletinBoardId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
