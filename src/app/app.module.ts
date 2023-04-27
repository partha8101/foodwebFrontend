import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginComponent } from './login/login.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { IUser } from './_models/user';
import { IAdmin } from './_models/admin';
import { AdminregComponent } from './adminreg/adminreg.component';
import { ViewalluserComponent } from './viewalluser/viewalluser.component';
import { UsereditproComponent } from './usereditpro/usereditpro.component';
import { UsereditpassComponent } from './usereditpass/usereditpass.component';
import { AdditemComponent } from './additem/additem.component';
import { AdmineditpassComponent } from './admineditpass/admineditpass.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IFood } from './_models/food';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as cloudinary from 'cloudinary-core'
import { FileUploadModule } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { ViewitemComponent } from './viewitem/viewitem.component';

import { ViewfoodComponent } from './viewfood/viewfood.component';
import { ICart } from './_models/cart';
import { ViewoderComponent } from './viewoder/viewoder.component';
import { IOrder } from './_models/order';
import { EdititemComponent } from './edititem/edititem.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RestaurentloginComponent } from './restaurentlogin/restaurentlogin.component';
import { RestaurentregComponent } from './restaurentreg/restaurentreg.component';
import { IRestaurent } from './_models/restaurent';
import { ResdashComponent } from './resdash/resdash.component';
import { RestaurenteditpassComponent } from './restaurenteditpass/restaurenteditpass.component';
import { ViewallrestaurentComponent } from './viewallrestaurent/viewallrestaurent.component';
import { InactivepageComponent } from './inactivepage/inactivepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminloginComponent,
    UserregComponent,
    UserloginComponent,
    LoginComponent,
    UserdashComponent,
    AdmindashComponent,
    AdminregComponent,
    ViewalluserComponent,
    UsereditproComponent,
    UsereditpassComponent,
    AdditemComponent,
    AdmineditpassComponent,
    ViewcartComponent,
    PagenotfoundComponent,
    ViewitemComponent,
    ViewfoodComponent,
    ViewoderComponent,
    EdititemComponent,
    ContactusComponent,
    RestaurentloginComponent,
    RestaurentregComponent,
    ResdashComponent,
    RestaurenteditpassComponent,
    ViewallrestaurentComponent,
    InactivepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinary,environment.cloudinaryconfig)
  ],
  providers: [IUser,IAdmin,IFood,ICart,IOrder,IRestaurent],
  bootstrap: [AppComponent]
})
export class AppModule { }
