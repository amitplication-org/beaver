import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PollListRelationFilter } from "../poll/PollListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type UserWhereInput = {
  customers?: CustomerListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  polls?: PollListRelationFilter;
  reports?: ReportListRelationFilter;
  username?: StringFilter;
};
