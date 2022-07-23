export type Maintenance = {
  createdAt: Date;
  description: string | null;
  id: string;
  maintenanceType?: "Clean" | "PestControl" | "Gardening" | "Design";
  name: string;
  updatedAt: Date;
};
