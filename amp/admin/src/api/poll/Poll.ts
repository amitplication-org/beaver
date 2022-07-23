import { Building } from "../building/Building";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Poll = {
  buildings?: Array<Building>;
  content: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  pollType?: "General" | "Maintenance" | "Committee";
  updatedAt: Date;
  user?: User;
};
