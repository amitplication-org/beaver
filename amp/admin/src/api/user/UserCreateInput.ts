import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { PollCreateNestedManyWithoutUsersInput } from "./PollCreateNestedManyWithoutUsersInput";
import { ReportCreateNestedManyWithoutUsersInput } from "./ReportCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  polls?: PollCreateNestedManyWithoutUsersInput;
  reports?: ReportCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
