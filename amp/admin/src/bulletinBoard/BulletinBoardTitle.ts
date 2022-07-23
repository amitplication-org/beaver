import { BulletinBoard as TBulletinBoard } from "../api/bulletinBoard/BulletinBoard";

export const BULLETINBOARD_TITLE_FIELD = "id";

export const BulletinBoardTitle = (record: TBulletinBoard): string => {
  return record.id || record.id;
};
