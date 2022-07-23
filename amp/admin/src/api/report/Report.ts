import { Building } from "../building/Building";
import { User } from "../user/User";

export type Report = {
  building?: Building;
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  user?: User;
};
