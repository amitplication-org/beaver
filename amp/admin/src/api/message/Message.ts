import { Building } from "../building/Building";
import { BulletinBoard } from "../bulletinBoard/BulletinBoard";
import { User } from "../user/User";

export type Message = {
  buildings?: Array<Building>;
  bulletinBoard?: BulletinBoard | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User;
};
