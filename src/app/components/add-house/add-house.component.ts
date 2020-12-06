import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  house: House = {
    neighborhood: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    hasCandy: true
    
  } 
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.house.address != '' && this.house.city != '' && this.house.neighborhood != '' && this.house.state != '' && this.house.zipcode != ''){
      this.houseService.addHouse(this.house);
      this.house.address = '';
      this.house.city ='';
      this.house.state='';
      this.house.zipcode='';
      this.house.neighborhood='';
      this.house.hasCandy=true;
    }
  }

}
