import { Company } from "../company/Company";
import { User } from "../user/User";

export type Customer = {
  company?: Company;
  createdAt: Date;
  customerType?: "Gold" | "Silver" | "Bronze";
  firstName: string;
  id: string;
  lastName: string;
  updatedAt: Date;
  user?: User | null;
};
