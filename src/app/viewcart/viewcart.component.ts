import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '../_models/cart';
import { IOrder } from '../_models/order';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(public cartobj:ICart,public userserviceobj:UserService,
    public router:Router,public orderobj:IOrder) { }
  cartarr:ICart[]=[];
  nodatafound:boolean=true;
  uemail:any=sessionStorage.getItem("useremail");
  uname:any=sessionStorage.getItem("username");
  uobj:any=(sessionStorage.getItem("userobj"));
  uaddress=JSON.parse(this.uobj).useraddress;
  ngOnInit(): void {
    this.userserviceobj.getallCartUsingGet(this.uemail)
      .subscribe((res:any)=>{
        console.log(res)
        if(res.length>0){
          this.cartarr=res;
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
      })
      
  }
  isUserlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('usertype')==="USER");
  }

  remove(cobj:ICart){
    this.userserviceobj.removeCartUsingPost(cobj)
      .subscribe((res)=>{
        console.log(res);
        console.log("Cart Item Removed");
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
      })
    
  }

  buy(cobj:ICart){
    this.orderobj.productname=cobj.productname;
    this.orderobj.producturl=cobj.producturl;
    this.orderobj.productprice=cobj.productprice;
    this.orderobj.useremail=cobj.useremail;
    this.orderobj.username=this.uname;
    this.orderobj.deliveryaddress=this.uaddress;
    this.orderobj.resemail=cobj.resemail;
    this.orderobj.resname=cobj.resname;
    this.orderobj.productquantity=cobj.productquantity;
    this.orderobj.producttotalprice=(cobj.productprice as number)*(cobj.productquantity as number);
    this.orderobj.orderstatus=true;
    this.userserviceobj.buyItemUsingPost(this.orderobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          console.log(res);
          console.log("Item Order Placed Successfully");
          this.router.navigate(['/vieworder']);
          this.userserviceobj.removeCartUsingPost(cobj)
            .subscribe((res)=>{
              console.log("Item removed from Cart After Buy");
            })
        }
      })

  }

}
