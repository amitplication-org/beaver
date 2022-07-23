import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { PollListRelationFilter } from "../poll/PollListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type BuildingWhereInput = {
  buildingType?: "Residence" | "Office";
  bulletinBoard?: BulletinBoardWhereUniqueInput;
  city?: CityWhereUniqueInput;
  companies?: CompanyListRelationFilter;
  id?: StringFilter;
  loacation?: StringFilter;
  message?: MessageListRelationFilter;
  name?: StringFilter;
  poll?: PollListRelationFilter;
  reports?: ReportListRelationFilter;
};
