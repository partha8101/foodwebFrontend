import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from '../_models/cart';
import { IFood } from '../_models/food';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {

  constructor(public foodobj:IFood,public cartobj:ICart,public userserviceobj:UserService,public router:Router) { }
  fobj:any=sessionStorage.getItem("foofitemobj");
  uemail:any=sessionStorage.getItem("useremail");
  flag:boolean=false;
  ngOnInit(): void {
    this.foodobj=JSON.parse(this.fobj);
    this.userserviceobj.checkCartUsingPost(this.foodobj,this.uemail)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.flag=true;
        }
        else{
          this.flag=false;
        }
      })
  }

  addcart(){
    this.cartobj.useremail=this.uemail;
    this.cartobj.resemail=this.foodobj.resemail;
    this.cartobj.resname=this.foodobj.resname
    this.cartobj.productname=this.foodobj.productname;
    this.cartobj.producturl=this.foodobj.producturl;
    this.cartobj.productprice=this.foodobj.productprice;
    this.cartobj.productquantity=1;

    this.userserviceobj.addCartUsingPost(this.cartobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          console.log(res)
          //this.router.navigate(['/viewcart'])
          this.flag=true;
        }
        
        
      })
  }
  isUserlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('usertype')==="USER");
  }
}
