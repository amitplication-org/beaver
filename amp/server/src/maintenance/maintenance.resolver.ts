import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MaintenanceResolverBase } from "./base/maintenance.resolver.base";
import { Maintenance } from "./base/Maintenance";
import { MaintenanceService } from "./maintenance.service";

@graphql.Resolver(() => Maintenance)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MaintenanceResolver extends MaintenanceResolverBase {
  constructor(
    protected readonly service: MaintenanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
