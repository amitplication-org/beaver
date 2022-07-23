import { BulletinBoardWhereUniqueInput } from "../bulletinBoard/BulletinBoardWhereUniqueInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CompanyCreateNestedManyWithoutBuildingsInput } from "./CompanyCreateNestedManyWithoutBuildingsInput";
import { MessageCreateNestedManyWithoutBuildingsInput } from "./MessageCreateNestedManyWithoutBuildingsInput";
import { PollCreateNestedManyWithoutBuildingsInput } from "./PollCreateNestedManyWithoutBuildingsInput";
import { ReportCreateNestedManyWithoutBuildingsInput } from "./ReportCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  buildingType: "Residence" | "Office";
  bulletinBoard?: BulletinBoardWhereUniqueInput | null;
  city?: CityWhereUniqueInput | null;
  companies?: CompanyCreateNestedManyWithoutBuildingsInput;
  loacation: string;
  message?: MessageCreateNestedManyWithoutBuildingsInput;
  name: string;
  poll?: PollCreateNestedManyWithoutBuildingsInput;
  reports?: ReportCreateNestedManyWithoutBuildingsInput;
};
