export type MaintenanceUpdateInput = {
  description?: string | null;
  maintenanceType?: "Clean" | "PestControl" | "Gardening" | "Design";
  name?: string;
};
