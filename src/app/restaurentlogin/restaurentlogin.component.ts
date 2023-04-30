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

  constructor(public resServiceObj:RestaurentService,public router:Router) { }
  resobj:IRestaurent={};
  flag:boolean=true;
  emailError:string="";
  passwordError:string="";
  ngOnInit(): void {
    this.resobj.resemail="";
    this.resobj.respass="";
  }
  emailValidate(){
    if(this.resobj.resemail==="")
            {
                this.emailError="The input field is required";
            }
            else{
                this.emailError="";
            }
  }
  passwordValidate(){
    if(this.resobj.respass==="")
            {
                this.passwordError="The input field is required";
            }
            else{
                this.passwordError="";
            }
  }
  onSubmit(){
    if(this.resobj.resemail=="" ||this.resobj.respass==""){
      alert("Fill all the input field");
    }
    else{
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

}
