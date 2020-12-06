import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { HousesComponent } from './components/houses/houses.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'signup',
  component: SignupComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'items',
  component: ItemsComponent,
},
{
  path: 'houses',
  component: HousesComponent,
},
{
  path: 'addhouses',
  component: AddHouseComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
