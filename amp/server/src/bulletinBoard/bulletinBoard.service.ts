import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BulletinBoardServiceBase } from "./base/bulletinBoard.service.base";

@Injectable()
export class BulletinBoardService extends BulletinBoardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
