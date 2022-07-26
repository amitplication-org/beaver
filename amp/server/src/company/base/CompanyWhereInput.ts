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
import { BuildingWhereUniqueInput } from "../../building/base/BuildingWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerListRelationFilter } from "../../customer/base/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class CompanyWhereInput {
  @ApiProperty({
    required: false,
    type: () => BuildingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereUniqueInput)
  @IsOptional()
  @Field(() => BuildingWhereUniqueInput, {
    nullable: true,
  })
  building?: BuildingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customers?: CustomerListRelationFilter;

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
}
export { CompanyWhereInput };
