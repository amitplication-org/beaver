import { Building } from "../building/Building";
import { Message } from "../message/Message";

export type BulletinBoard = {
  building?: Building | null;
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
};
