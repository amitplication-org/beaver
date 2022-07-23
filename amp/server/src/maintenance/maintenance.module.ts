import { Module } from "@nestjs/common";
import { MaintenanceModuleBase } from "./base/maintenance.module.base";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceResolver } from "./maintenance.resolver";

@Module({
  imports: [MaintenanceModuleBase],
  providers: [MaintenanceService, MaintenanceResolver],
  exports: [MaintenanceService],
})
export class MaintenanceModule {}
