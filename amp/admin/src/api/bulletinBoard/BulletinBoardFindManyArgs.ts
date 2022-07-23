import { BulletinBoardWhereInput } from "./BulletinBoardWhereInput";
import { BulletinBoardOrderByInput } from "./BulletinBoardOrderByInput";

export type BulletinBoardFindManyArgs = {
  where?: BulletinBoardWhereInput;
  orderBy?: Array<BulletinBoardOrderByInput>;
  skip?: number;
  take?: number;
};
