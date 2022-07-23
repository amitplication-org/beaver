/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Maintenance } from "@prisma/client";

export class MaintenanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MaintenanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceFindManyArgs>
  ): Promise<number> {
    return this.prisma.maintenance.count(args);
  }

  async findMany<T extends Prisma.MaintenanceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceFindManyArgs>
  ): Promise<Maintenance[]> {
    return this.prisma.maintenance.findMany(args);
  }
  async findOne<T extends Prisma.MaintenanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceFindUniqueArgs>
  ): Promise<Maintenance | null> {
    return this.prisma.maintenance.findUnique(args);
  }
  async create<T extends Prisma.MaintenanceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceCreateArgs>
  ): Promise<Maintenance> {
    return this.prisma.maintenance.create<T>(args);
  }
  async update<T extends Prisma.MaintenanceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceUpdateArgs>
  ): Promise<Maintenance> {
    return this.prisma.maintenance.update<T>(args);
  }
  async delete<T extends Prisma.MaintenanceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MaintenanceDeleteArgs>
  ): Promise<Maintenance> {
    return this.prisma.maintenance.delete(args);
  }
}
