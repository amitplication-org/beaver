import { Customer } from "../customer/Customer";
import { Message } from "../message/Message";
import { Poll } from "../poll/Poll";
import { Report } from "../report/Report";

export type User = {
  createdAt: Date;
  customers?: Array<Customer>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  polls?: Array<Poll>;
  reports?: Array<Report>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
