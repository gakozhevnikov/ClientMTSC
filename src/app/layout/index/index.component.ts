import { Component, OnInit } from '@angular/core';
import {TechObjectService} from "../../service/tech-object.service";
import {TechObject} from "../../model/TechObject";
import {NotificationService} from "../../service/notification.service";
import {Equipment} from "../../model/Equipment";
import {EquipmentService} from "../../service/equipment.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isTechObjectsLoaded = false;
  techObjects :TechObject[];
  isEquipmentsLoaded = false;
  equipments: Equipment[];


  constructor(private techObjectService: TechObjectService,
              private equipmentService: EquipmentService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.techObjectService.getTechObjects().subscribe(
      data=>{
       console.log(data);
       this.techObjects=data;
       this.isTechObjectsLoaded=true;
      }
    );
    this.equipmentService.getEquipments().subscribe(
      data=>{
        console.log(data);
        this.equipments=data;
        this.isEquipmentsLoaded=true;
      }
    );

  }



}
