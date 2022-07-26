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
import { BulletinBoardWhereInput } from "./BulletinBoardWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BulletinBoardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BulletinBoardWhereInput,
  })
  @ValidateNested()
  @Type(() => BulletinBoardWhereInput)
  @IsOptional()
  @Field(() => BulletinBoardWhereInput, {
    nullable: true,
  })
  every?: BulletinBoardWhereInput;

  @ApiProperty({
    required: false,
    type: () => BulletinBoardWhereInput,
  })
  @ValidateNested()
  @Type(() => BulletinBoardWhereInput)
  @IsOptional()
  @Field(() => BulletinBoardWhereInput, {
    nullable: true,
  })
  some?: BulletinBoardWhereInput;

  @ApiProperty({
    required: false,
    type: () => BulletinBoardWhereInput,
  })
  @ValidateNested()
  @Type(() => BulletinBoardWhereInput)
  @IsOptional()
  @Field(() => BulletinBoardWhereInput, {
    nullable: true,
  })
  none?: BulletinBoardWhereInput;
}
export { BulletinBoardListRelationFilter };
