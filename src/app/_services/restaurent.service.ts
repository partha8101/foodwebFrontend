import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from '../_models/food';
import { IRestaurent } from '../_models/restaurent';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {

  constructor(public httpclientobj:HttpClient) { }
  private _URL="http://localhost:5000/restaurent";

  RestaurentRegUsingPost(resobj:IRestaurent){
    let url=this._URL+"/registration";
    return this.httpclientobj.post(url,resobj);
  }
  RestaurentLoginUsingPost(resobj:IRestaurent){
    let url=this._URL+"/login";
    return this.httpclientobj.post(url,resobj);
  }
  uploaditem(foodobj:IFood){
    let url=this._URL+"/uploadfood";
    return this.httpclientobj.post(url,foodobj);
  }
  getAllFoodUsingget(resemail:string){
    let url=this._URL+"/allfood/"+resemail;
    return this.httpclientobj.get(url);
  }
  itemdeleteUsingDelete(productobj:IFood){
    let url=this._URL+"/deleteitem";
    return this.httpclientobj.post(url,productobj);
  }
  userOrderUsingPost(foodobj:IFood){
    let url=this._URL+"/viewuserorder";
    return this.httpclientobj.post(url,foodobj);
  }
  editItemUsingPut(foodobj:IFood){
    let url=this._URL+"/edititem";
    return this.httpclientobj.put(url,foodobj);
  }
  isResActive(resemail:string){
    let url=this._URL+"/isactive/"+resemail;
    return this.httpclientobj.get(url);
  }
  ResUpadtePassUsingPut(resobj:IRestaurent){
    let url=this._URL+"/updatepass";
    return this.httpclientobj.put(url,resobj);
  }
}
