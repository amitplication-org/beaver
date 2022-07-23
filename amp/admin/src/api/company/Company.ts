import { Building } from "../building/Building";
import { Customer } from "../customer/Customer";

export type Company = {
  building?: Building;
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  updatedAt: Date;
};
