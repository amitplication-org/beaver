import { BulletinBoard } from "../bulletinBoard/BulletinBoard";
import { City } from "../city/City";
import { Company } from "../company/Company";
import { Message } from "../message/Message";
import { Poll } from "../poll/Poll";
import { Report } from "../report/Report";

export type Building = {
  buildingType?: "Residence" | "Office";
  bulletinBoard?: BulletinBoard | null;
  city?: City | null;
  companies?: Array<Company>;
  createdAt: Date;
  id: string;
  loacation: string;
  message?: Array<Message>;
  name: string;
  poll?: Array<Poll>;
  reports?: Array<Report>;
  updatedAt: Date;
};
