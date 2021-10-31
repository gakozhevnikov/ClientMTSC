import {TechObject} from "./TechObject";
import {TypeApproval} from "./documents/TypeApproval";
import {MaintenanceOperations} from "./maintenance/MaintenanceOperations";


export interface Equipment{
  id?: number;
  title: string;
  serialNumber: string;
  techObject?: TechObject[];
  typeApproval?: TypeApproval[];
  maintenanceOperations?: MaintenanceOperations[];
}
