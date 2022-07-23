import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  company?: CompanyWhereUniqueInput;
  customerType?: "Gold" | "Silver" | "Bronze";
  firstName?: string;
  lastName?: string;
  user?: UserWhereUniqueInput | null;
};
