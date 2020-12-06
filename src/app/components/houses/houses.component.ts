import { Component, OnInit } from '@angular/core';
import {HouseService} from '../../services/house.service';
import { House } from '../../models/house';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {
  houses: House[];

  constructor(private houseService: HouseService) { }

  ngOnInit() {
    return this.houseService.getHouses().subscribe( houses => {
      this.houses = houses;
    })
  }

  deleteHouse(event, house){
    this.houseService.deleteHouse(house);
  }

}
