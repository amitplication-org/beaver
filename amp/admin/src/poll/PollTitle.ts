import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "name";

export const PollTitle = (record: TPoll): string => {
  return record.name || record.id;
};
