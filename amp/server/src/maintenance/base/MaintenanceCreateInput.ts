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
import { IsString, IsOptional, IsEnum } from "class-validator";
import { EnumMaintenanceMaintenanceType } from "./EnumMaintenanceMaintenanceType";
@InputType()
class MaintenanceCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumMaintenanceMaintenanceType,
  })
  @IsEnum(EnumMaintenanceMaintenanceType)
  @Field(() => EnumMaintenanceMaintenanceType)
  maintenanceType!: "Clean" | "PestControl" | "Gardening" | "Design";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}
export { MaintenanceCreateInput };