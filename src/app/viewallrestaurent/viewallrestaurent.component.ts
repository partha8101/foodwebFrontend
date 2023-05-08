import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IRestaurent } from '../_models/restaurent';
import { AdminService } from '../_services/admin.service';
import { IOrder } from '../_models/order';

@Component({
  selector: 'app-viewallrestaurent',
  templateUrl: './viewallrestaurent.component.html',
  styleUrls: ['./viewallrestaurent.component.css']
})
export class ViewallrestaurentComponent implements OnInit {

  constructor(public router:Router,public filter:Ng2SearchPipeModule,public adminserviceobj:AdminService) { }
  allreslist:IRestaurent[]= [];
  showmsg:boolean=true;
  searchText:any;
  nodatafound:boolean=true;
  nodatafound2:boolean=true;
  orderarr:IOrder[]=[];
  orderresname:string="";
  boolarr=[
    {
    id:"true",
    name:"Active"
    },
    {
      id:"false",
      name:"Block"
      },
  ];
  ngOnInit(): void {
    this.adminserviceobj.ViewRestaurentUsingGet()
      .subscribe((res:any)=>{
        console.log("RETURN BACK");
        console.log(res);
        if(res.length>0){
          this.allreslist=res;
          console.log(this.allreslist);
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
        
      })
  }

  delete(resobj:IRestaurent){
    this.adminserviceobj.RestaurentDeleteusingDelete(resobj)
    .subscribe((res)=>{
      console.log("Deleted Successfully");
      let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
    })
  }
  newresobj=new IRestaurent();
  
  edit(resobj:IRestaurent){
    this.newresobj=resobj;
  }
  isAdminlogin(){
    return (sessionStorage.getItem('admintype')==="ADMIN");
  }
  submit(){
    this.adminserviceobj.RestaurentUpdateUsingPut(this.newresobj)
    .subscribe((res)=>{
      console.log(res);
      this.showmsg=false;
    })
  }
  viewOrder(resobj:IRestaurent){
    this.orderresname=resobj.resname as string;
    this.adminserviceobj.viewOrderOfResUsingGet(resobj)
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

  onChange(event:any){
    console.log((event.target as HTMLInputElement).value);
    this.newresobj.active=JSON.parse((event.target as HTMLInputElement).value);
  }

}
