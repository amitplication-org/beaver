import { Module } from "@nestjs/common";
import { BuildingModuleBase } from "./base/building.module.base";
import { BuildingService } from "./building.service";
import { BuildingResolver } from "./building.resolver";

@Module({
  imports: [BuildingModuleBase],
  providers: [BuildingService, BuildingResolver],
  exports: [BuildingService],
})
export class BuildingModule {}
