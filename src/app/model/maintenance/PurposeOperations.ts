import {MaintenanceOperations} from "./MaintenanceOperations";

export interface PurposeOperations{
  id?: number;
  designation: string;
  maintenanceOperations: MaintenanceOperations[];
}
