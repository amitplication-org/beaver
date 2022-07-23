import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BuildingServiceBase } from "./base/building.service.base";

@Injectable()
export class BuildingService extends BuildingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
