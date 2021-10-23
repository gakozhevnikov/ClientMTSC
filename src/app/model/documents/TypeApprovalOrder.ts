import {TypeApproval} from "./TypeApproval";


export interface TypeApprovalOrder{
  id?:number;
  documentFile: File;
  index: string;
  dateOfOrder: Date;
  indexInOrder:string
  typeApproval:TypeApproval;
}
