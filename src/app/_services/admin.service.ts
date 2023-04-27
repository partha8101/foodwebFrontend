import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from '../_models/admin';
import { IUser } from '../_models/user';
import { IFood } from '../_models/food';
import { IOrder } from '../_models/order';
import { IRestaurent } from '../_models/restaurent';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public httpclientobj:HttpClient) { }
  private _URL="http://localhost:5000/admin";

  AdminRegUsingPost(adminobj:IAdmin){
    let url=this._URL+"/reg";
    return this.httpclientobj.post(url,adminobj);
  }

  AdminLoginUsingPost(adminobj:IAdmin){
    let url=this._URL+"/login";
    return this.httpclientobj.post(url,adminobj);
  }

  ViewUserUsingGet(){
    let url=this._URL+"/viewuser";
    return this.httpclientobj.get(url);
  }

  UserDeleteusingDelete(userobj:IUser){
    let url=this._URL+"/deleteuser/"+userobj.useremail;
    return this.httpclientobj.delete(url);
  }

  userUpdateUsingPut(userobj:IUser){
    let url=this._URL+"/userupdate";
    return this.httpclientobj.put(url,userobj);
  }
  RestaurentUpdateUsingPut(resobj:IRestaurent){
    let url=this._URL+"/resupdate";
    return this.httpclientobj.put(url,resobj);
  }
  adminUpadtePassUsingPut(adminobj:IAdmin){
    let url=this._URL+"/updatepass";
    return this.httpclientobj.put(url,adminobj);
  }

  viewOrderUsingGet(userobj:IUser){
    let url=this._URL+"/vieworder/"+userobj.useremail;
    return this.httpclientobj.get(url);
  }

  
  ViewRestaurentUsingGet(){
    let url=this._URL+"/viewres";
    return this.httpclientobj.get(url);
  }
  
  RestaurentDeleteusingDelete(resobj:IRestaurent){
    let url=this._URL+"/deleteres/"+resobj.resemail;
    return this.httpclientobj.delete(url);
  }
  
}
