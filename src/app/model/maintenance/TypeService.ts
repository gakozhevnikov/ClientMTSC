import {MaintenanceOperations} from "./MaintenanceOperations";

export interface TypeService{
  id:string;
  designation:string;
  maintenanceOperations:MaintenanceOperations[];
}
