import {Equipment} from "../Equipment";
import {TypeApprovalOrder} from "./TypeApprovalOrder";
import {TypeDescriptionDocument} from "./TypeDescriptionDocument";
import {VmiProcedure} from "./VmiProcedure";


export interface TypeApproval{
  id?: number;
  documentFile:File;
  indexDocument: string;
  nameMeasuringInstruments: string;
  dateOfApproval: Date;
  vmiInterval?: number;
  vmiUnit?: string
  typeApprovalOrder: TypeApprovalOrder;
  typeDescription: TypeDescriptionDocument;
  vmiProcedure: VmiProcedure;
  equipment: Equipment;
}
