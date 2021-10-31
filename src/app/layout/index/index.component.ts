import { Component, OnInit } from '@angular/core';
import {TechObjectService} from "../../service/tech-object.service";
import {TechObject} from "../../model/TechObject";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isTechObjectsLoaded = false;
  techObjects :TechObject[];

  constructor(private techObjectService: TechObjectService) { }

  ngOnInit(): void {
    this.techObjectService.getTechObjects().subscribe(
      data=>{
       console.log(data);
       this.techObjects=data;
       this.isTechObjectsLoaded=true;
      }
    );
  }

}
