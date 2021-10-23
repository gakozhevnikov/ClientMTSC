import {TypeApproval} from "./TypeApproval";

export interface TypeDescriptionDocument{
  id?:number;
  documentFile: File;
  indexInRegistry:string;
  typeApproval:TypeApproval;
}
