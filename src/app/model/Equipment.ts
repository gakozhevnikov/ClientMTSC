import {TechObjectP} from "./TechObject";
import {TypeApproval} from "./documents/TypeApproval";
import {MaintenanceOperations} from "./maintenance/MaintenanceOperations";


export interface Equipment{
  id?: number;
  title: string;
  serialNumber: string;
  techObject?: TechObjectP[];
  typeApproval?: TypeApproval[];
  maintenanceOperations?: MaintenanceOperations[];
}
