import { Module } from "@nestjs/common";
import { BulletinBoardModuleBase } from "./base/bulletinBoard.module.base";
import { BulletinBoardService } from "./bulletinBoard.service";
import { BulletinBoardResolver } from "./bulletinBoard.resolver";

@Module({
  imports: [BulletinBoardModuleBase],
  providers: [BulletinBoardService, BulletinBoardResolver],
  exports: [BulletinBoardService],
})
export class BulletinBoardModule {}
