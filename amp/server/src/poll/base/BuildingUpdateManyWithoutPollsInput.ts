/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BuildingWhereUniqueInput } from "../../building/base/BuildingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class BuildingUpdateManyWithoutPollsInput {
  @Field(() => [BuildingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuildingWhereUniqueInput],
  })
  connect?: Array<BuildingWhereUniqueInput>;

  @Field(() => [BuildingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuildingWhereUniqueInput],
  })
  disconnect?: Array<BuildingWhereUniqueInput>;

  @Field(() => [BuildingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BuildingWhereUniqueInput],
  })
  set?: Array<BuildingWhereUniqueInput>;
}
export { BuildingUpdateManyWithoutPollsInput };
