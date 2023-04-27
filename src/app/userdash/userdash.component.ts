import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { IFood } from '../_models/food';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  constructor(public foodobj:IFood,public userserviceobj:UserService,public router:Router,public filter:Ng2SearchPipeModule) { }
  foodarr:IFood[]=[];
  a=1;
  searchText:string="";
  nodatafound:boolean=true;
  ngOnInit(): void {
    this.userserviceobj.getAllFoodUsingget()
      .subscribe((res:any)=>{
        if(res.length>0){
          this.foodarr=res;
          console.log(this.foodarr);
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

  view(fobj:IFood){
    sessionStorage.setItem("foofitemobj",JSON.stringify(fobj));
    this.router.navigate(['/viewfood']);
  }
  
}
