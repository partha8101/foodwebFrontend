import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurent } from '../_models/restaurent';
import { RestaurentService } from '../_services/restaurent.service';

@Component({
  selector: 'app-restaurentlogin',
  templateUrl: './restaurentlogin.component.html',
  styleUrls: ['./restaurentlogin.component.css']
})
export class RestaurentloginComponent implements OnInit {

  constructor(public resobj:IRestaurent,public resServiceObj:RestaurentService,public router:Router) { }
  flag:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
    this.resServiceObj.RestaurentLoginUsingPost(this.resobj)
      .subscribe((res:any)=>{
        console.log(res.length);
        if(res.length>0){
          console.log(res[0]);
          sessionStorage.setItem("restype","RESTAURENT");
          sessionStorage.setItem("resname",res[0].resname);
          sessionStorage.setItem("resemail",res[0].resemail);
          sessionStorage.setItem("resobj",JSON.stringify(res[0]));
          this.router.navigate(['/viewitem']);
          console.log("Login Successful");
        }
        else{
          this.flag=false;
          this.resobj.respass="";
          console.log("Login Failed");
        }
        
      })
  }

}
