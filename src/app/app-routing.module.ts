import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHouseComponent } from './components/add-house/add-house.component';
import { HousesComponent } from './components/houses/houses.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './users/user-list/user-list.component';

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
},
{
  path: 'userlist',
  component: UserlistComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
