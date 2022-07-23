import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  company?: CompanyWhereUniqueInput;
  customerType?: "Gold" | "Silver" | "Bronze";
  firstName?: StringFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  user?: UserWhereUniqueInput;
};
