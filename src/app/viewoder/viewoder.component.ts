import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrder } from '../_models/order';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-viewoder',
  templateUrl: './viewoder.component.html',
  styleUrls: ['./viewoder.component.css']
})
export class ViewoderComponent implements OnInit {

  constructor(public orderobj:IOrder,public userserviceobj:UserService,public router:Router) { }
  useremail:any=sessionStorage.getItem("useremail");
  orderarr:IOrder[]=[];
  nodatafound:boolean=true;
  ngOnInit(): void {
    this.userserviceobj.viewOrderUsingGet(this.useremail)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
          this.orderarr=res;
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
      })
  }

  cancel(orderobj:IOrder){
    this.userserviceobj.cancelOrderUsingPut(orderobj)
      .subscribe((res)=>{
        console.log(res);
        console.log("Order Canceled");
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        })
      })

  }
  isUserlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('usertype')==="USER");
  }
}
