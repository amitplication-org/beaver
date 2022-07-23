import { Building } from "../building/Building";

export type City = {
  buildings?: Array<Building>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
