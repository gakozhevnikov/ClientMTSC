import {Equipment} from "../Equipment";
import {TypeService} from "./TypeService";
import {PurposeOperations} from "./PurposeOperations";

export interface MaintenanceOperations{
  id?: number;
  operation:string;
  sequence: number;
  typeService?: TypeService;
  purposeOperations?: PurposeOperations;
  equipment?: Equipment[];
}
