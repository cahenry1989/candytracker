import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { User } from '../models/signup';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('Users').valueChanges()
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('lastName','asc'));

    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map( a=> {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
   }

   getUsers(){
     return this.users;
   }

   addUser(user: User){
     this.usersCollection.add(user);
   }

   deleteUser(user: User){
   this.userDoc =this.afs.doc(`userss/${user.lastName}`);
   this.userDoc.delete();
  }
}
