import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {ItemService} from './services/item.service';
import { ItemsComponent } from './items/items.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HousesComponent } from './components/houses/houses.component';
import { AddHouseComponent } from './components/add-house/add-house.component';
import {HouseService} from './services/house.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    HousesComponent,
    AddHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule

  ],
  providers: [ItemService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
