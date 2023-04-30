import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFood } from '../_models/food';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IOrder } from '../_models/order';

import { RestaurentService } from '../_services/restaurent.service';
import { IRestaurent } from '../_models/restaurent';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {

  constructor(public resServiceObj:RestaurentService,public router:Router,public filter:Ng2SearchPipeModule,
              public resobj:IRestaurent) { }
  robj:any=sessionStorage.getItem('resobj');
  foodarr:IFood[]=[];
  orderarr:IOrder[]=[];
  searchText="";
  isActive:boolean=true;
  nodatafound:boolean=true;
  nodatafound2:boolean=true;
  resemail:any=sessionStorage.getItem("resemail");
  ngOnInit(): void {
    this.resobj=JSON.parse(this.robj);
    this.resServiceObj.isResActive(this.resemail)
    .subscribe((res:any)=>{
      this.isActive=res.active;
    })
    this.resServiceObj.getAllFoodUsingget(this.resemail)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.foodarr=res;
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
      })
  }
  delete(pobj:IFood){
    this.resServiceObj.itemdeleteUsingDelete(pobj)
      .subscribe((res)=>{
        console.log(res);
        console.log("Item Deleted");
        let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);})
      })
  }
  foodname:string="";
  viewUserOrder(foodobj:IFood){
    this.foodname=foodobj.productname as string;
    this.resServiceObj.userOrderUsingPost(foodobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.orderarr=res;
          this.nodatafound2=true;
        }
        else{
          this.nodatafound2=false;
        }
      })
  }

  edit(foodobj:IFood){
    sessionStorage.setItem("itemobj",JSON.stringify(foodobj));
    this.router.navigate(['/edititem']);
  }
  isRestaurentlogin():boolean{
    return(sessionStorage.getItem('restype')==="RESTAURENT");
  }
}
