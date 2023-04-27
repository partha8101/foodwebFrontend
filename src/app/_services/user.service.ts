import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../_models/user';
import { ICart } from '../_models/cart';
import { IOrder } from '../_models/order';
import { IFood } from '../_models/food';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpclientobj:HttpClient) { }
  private _URL="http://localhost:5000/user";


  UserRegUsingPost(userobj:IUser){
    let url=this._URL+"/userreg";
    return this.httpclientobj.post(url,userobj);
  }

  UserLoginUsingPost(userobj:IUser){
    let url=this._URL+"/userlogin";
    return this.httpclientobj.post(url,userobj);
  }

  userUpadtePassUsingPut(userobj:IUser){
    let url=this._URL+"/updatepass";
    return this.httpclientobj.put(url,userobj);
  }

  userUpdateProUsingPut(userobj:IUser){
    let url=this._URL+"/userupdate";
    return this.httpclientobj.put(url,userobj);
  }

  getAllFoodUsingget(){
    let url=this._URL+"/allfood";
    return this.httpclientobj.get(url);
  }

  addCartUsingPost(cartobj:ICart){
    let url=this._URL+"/addcartitem";
    return this.httpclientobj.post(url,cartobj);
  }

  checkCartUsingPost(foodobj:IFood,useremail:String){
    let url=this._URL+"/checkcart/"+useremail;
    return this.httpclientobj.post(url,foodobj);
  }

  getallCartUsingGet(useremail:string){
    let url=this._URL+"/viewallcart/"+useremail;
    return this.httpclientobj.get(url);
  }

  removeCartUsingPost(cartobj:ICart){
    let url=this._URL+"/removecart";
    return this.httpclientobj.post(url,cartobj);
  }

  buyItemUsingPost(orderobj:IOrder){
    let url=this._URL+"/buyitem";
    return this.httpclientobj.post(url,orderobj);
  }

  viewOrderUsingGet(useremail:String){
    let url=this._URL+"/vieworder/"+useremail;
    return this.httpclientobj.get(url);
  }

  cancelOrderUsingPut(orderobj:IOrder){
    let url=this._URL+"/cancelorder";
    return this.httpclientobj.put(url,orderobj);
  }

  searchItemUsingGet(productname:String){
    let url=this._URL+"/searchitem/"+productname;
    return this.httpclientobj.get(url);
  }
}
