import {TypeApproval} from "./TypeApproval";

export interface VmiProcedure{
  id?:number;
  documentFile: File;
  nameDocument:string;
  typeApproval:TypeApproval;
}
