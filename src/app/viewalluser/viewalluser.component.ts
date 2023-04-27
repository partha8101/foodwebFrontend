import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../_services/admin.service';
import { IUser } from '../_models/user';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IOrder } from '../_models/order';

@Component({
  selector: 'app-viewalluser',
  templateUrl: './viewalluser.component.html',
  styleUrls: ['./viewalluser.component.css']
})
export class ViewalluserComponent implements OnInit {

  constructor(public adminserviceobj:AdminService,public router:Router,public filter:Ng2SearchPipeModule) { }
  alluserlist:IUser[]= [];
  showmsg:boolean=true;
  searchText:any;
  nodatafound:boolean=true;
  nodatafound2:boolean=true;
  ngOnInit(): void {
    this.adminserviceobj.ViewUserUsingGet()
      .subscribe((res:any)=>{
        console.log("RETURN BACK");
        console.log(res);
        if(res.length>0){
          this.alluserlist=res;
          console.log(this.alluserlist);
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
        
      })
  }
  isAdminlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('admintype')==="ADMIN");
  }
  orderusername:any;
  orderarr:IOrder[]=[];
  
  viewOrder(user:IUser){
    this.orderusername=user.username;
    this.adminserviceobj.viewOrderUsingGet(user)
      .subscribe((res:any)=>{
        if(res.length>0){
          console.log(res)
          this.orderarr=res;
          this.nodatafound2=true;
        }
        else{
          this.nodatafound2=false;
        }
        
      })
  }
  


  delete(userobj:IUser){
    this.adminserviceobj.UserDeleteusingDelete(userobj)
    .subscribe((res)=>{
      console.log("Deleted Successfully");
      let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    })
  }
  newuserobj=new IUser();
  
  edit(userobj:IUser){
    this.newuserobj=userobj;
  }
  submit(){
    this.adminserviceobj.userUpdateUsingPut(this.newuserobj)
    .subscribe((res)=>{
      console.log(res);
      this.showmsg=false;
    })
  }

  

}
