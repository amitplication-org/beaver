import { Module } from "@nestjs/common";
import { CityModuleBase } from "./base/city.module.base";
import { CityService } from "./city.service";
import { CityResolver } from "./city.resolver";

@Module({
  imports: [CityModuleBase],
  providers: [CityService, CityResolver],
  exports: [CityService],
})
export class CityModule {}
