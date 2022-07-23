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
import { CustomerCreateNestedManyWithoutCompaniesInput } from "./CustomerCreateNestedManyWithoutCompaniesInput";
@InputType()
class CompanyCreateInput {
  @ApiProperty({
    required: true,
    type: () => BuildingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BuildingWhereUniqueInput)
  @Field(() => BuildingWhereUniqueInput)
  building!: BuildingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutCompaniesInput;
}
export { CompanyCreateInput };