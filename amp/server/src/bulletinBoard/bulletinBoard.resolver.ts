import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BulletinBoardResolverBase } from "./base/bulletinBoard.resolver.base";
import { BulletinBoard } from "./base/BulletinBoard";
import { BulletinBoardService } from "./bulletinBoard.service";

@graphql.Resolver(() => BulletinBoard)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BulletinBoardResolver extends BulletinBoardResolverBase {
  constructor(
    protected readonly service: BulletinBoardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
