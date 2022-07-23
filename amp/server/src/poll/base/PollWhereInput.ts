/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BuildingListRelationFilter } from "../../building/base/BuildingListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumPollPollType } from "./EnumPollPollType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class PollWhereInput {
  @ApiProperty({
    required: false,
    type: () => BuildingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BuildingListRelationFilter)
  @IsOptional()
  @Field(() => BuildingListRelationFilter, {
    nullable: true,
  })
  buildings?: BuildingListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  content?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumPollPollType,
  })
  @IsEnum(EnumPollPollType)
  @IsOptional()
  @Field(() => EnumPollPollType, {
    nullable: true,
  })
  pollType?: "General" | "Maintenance" | "Committee";

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}
export { PollWhereInput };