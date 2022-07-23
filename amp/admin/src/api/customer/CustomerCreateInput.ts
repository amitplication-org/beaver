import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  company: CompanyWhereUniqueInput;
  customerType: "Gold" | "Silver" | "Bronze";
  firstName: string;
  lastName: string;
  user?: UserWhereUniqueInput | null;
};
