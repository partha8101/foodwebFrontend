import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdmineditpassComponent } from './admineditpass/admineditpass.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregComponent } from './adminreg/adminreg.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EdititemComponent } from './edititem/edititem.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResdashComponent } from './resdash/resdash.component';
import { RestaurenteditpassComponent } from './restaurenteditpass/restaurenteditpass.component';
import { RestaurentloginComponent } from './restaurentlogin/restaurentlogin.component';
import { RestaurentregComponent } from './restaurentreg/restaurentreg.component';
import { UserdashComponent } from './userdash/userdash.component';
import { UsereditpassComponent } from './usereditpass/usereditpass.component';
import { UsereditproComponent } from './usereditpro/usereditpro.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { ViewallrestaurentComponent } from './viewallrestaurent/viewallrestaurent.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
import { ViewoderComponent } from './viewoder/viewoder.component';

const routes: Routes = [
  {component:HomeComponent,
  path:''},
  {component:LoginComponent,
    path:'login'},
  {component:UserloginComponent,
    path:'userlogin'},
  {component:AdminloginComponent,
    path:'adminlogin'},
  {component:ContactusComponent,
    path:'contactus'},
  {component:UserregComponent,
    path:'userreg'},
  {component:RestaurentregComponent,
    path:'restaurentreg'},
  {component:RestaurentloginComponent,
    path:'restaurentlogin'},
  {component:ResdashComponent,
    path:'resdash'},
  {component:RestaurenteditpassComponent,
    path:'restaurenteditpass'},
  {component:ViewallrestaurentComponent,
    path:'viewallres'},
  {component:AdminregComponent,
    path:'adminreg'},
  {component:UserdashComponent,
    path:'userdash'},
  {component:AdmindashComponent,
    path:'admindash'},
  {component:UsereditpassComponent,
    path:'usereditpass'},
  {component:UsereditproComponent,
    path:'usereditpro'},
  {component:ViewalluserComponent,
    path:'viewalluser'},
  {component:AdmineditpassComponent,
    path:'admineditpass'},
  {component:AdditemComponent,
    path:'additem'},
  {component:ViewcartComponent,
  path:'viewcart'},
  {component:ViewfoodComponent,
  path:'viewfood'},
  {component:ViewoderComponent,
  path:'vieworder'},
  {component:ViewitemComponent,
  path:'viewitem'},
  {component:EdititemComponent,
  path:'edititem'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
