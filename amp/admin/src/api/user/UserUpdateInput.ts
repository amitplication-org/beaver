import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { PollUpdateManyWithoutUsersInput } from "./PollUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  customers?: CustomerUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  polls?: PollUpdateManyWithoutUsersInput;
  reports?: ReportUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
