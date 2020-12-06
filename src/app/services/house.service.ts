import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { House } from '../models/house';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  housesCollection: AngularFirestoreCollection<House>;
  houses: Observable<House[]>;
  houseDoc: AngularFirestoreDocument<House>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('houses').valueChanges()
    this.housesCollection = this.afs.collection('houses', ref => ref.orderBy('address','asc'));

    this.houses = this.housesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as House;
        data.address = a.payload.doc.id;
        return data;
      });
    }))
   }

   getHouses(){
     return this.houses;
   }

   addHouse(house: House){
     this.housesCollection.add(house);
   }

   deleteHouse(house: House){
   this.houseDoc =this.afs.doc(`houses/${house.hasCandy}`);
   this.houseDoc.delete();
  }
}
 