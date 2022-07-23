import { Module } from "@nestjs/common";
import { PollModuleBase } from "./base/poll.module.base";
import { PollService } from "./poll.service";
import { PollResolver } from "./poll.resolver";

@Module({
  imports: [PollModuleBase],
  providers: [PollService, PollResolver],
  exports: [PollService],
})
export class PollModule {}
