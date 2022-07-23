export type MaintenanceCreateInput = {
  description?: string | null;
  maintenanceType: "Clean" | "PestControl" | "Gardening" | "Design";
  name: string;
};
