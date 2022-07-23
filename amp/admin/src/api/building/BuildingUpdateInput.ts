import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CompanyUpdateManyWithoutBuildingsInput } from "./CompanyUpdateManyWithoutBuildingsInput";
import { MessageUpdateManyWithoutBuildingsInput } from "./MessageUpdateManyWithoutBuildingsInput";
import { PollUpdateManyWithoutBuildingsInput } from "./PollUpdateManyWithoutBuildingsInput";
import { ReportUpdateManyWithoutBuildingsInput } from "./ReportUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  buildingType?: "Residence" | "Office";
  bulletinBoard?: BulletinBoardWhereUniqueInput | null;
  city?: CityWhereUniqueInput | null;
  companies?: CompanyUpdateManyWithoutBuildingsInput;
  loacation?: string;
  message?: MessageUpdateManyWithoutBuildingsInput;
  name?: string;
  poll?: PollUpdateManyWithoutBuildingsInput;
  reports?: ReportUpdateManyWithoutBuildingsInput;
};
