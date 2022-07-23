import { Maintenance as TMaintenance } from "../api/maintenance/Maintenance";

export const MAINTENANCE_TITLE_FIELD = "name";

export const MaintenanceTitle = (record: TMaintenance): string => {
  return record.name || record.id;
};
