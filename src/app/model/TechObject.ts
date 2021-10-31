import {Equipment} from "./Equipment";


export interface TechObject {
  id?: number;
  title: string;
  equipment?: Equipment[];
}
