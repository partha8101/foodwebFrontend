import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(public userserviceobj:UserService,public router:Router) { }
  userobj:IUser={};
  flag:boolean=true;
  emailError:string="";
  passwordError:string="";
  ngOnInit(): void {
    this.userobj.useremail="";
    this.userobj.userpass="";
  }
  emailValidate(){
    if(this.userobj.useremail==="")
            {
                this.emailError="The input field is required";
            }
            else{
                this.emailError="";
            }
  }
  passwordValidate(){
    if(this.userobj.userpass==="")
            {
                this.passwordError="The input field is required";
            }
            else{
                this.passwordError="";
            }
  }
  onSubmit(){
    if(this.userobj.useremail==="" || this.userobj.userpass===""){
      alert("Fill all the input field");
    }
    else{
      this.userserviceobj.UserLoginUsingPost(this.userobj)
      .subscribe((res:any)=>{
        console.log(res.length);
        if(res.length>0){
          console.log(res[0]);
          sessionStorage.setItem("usertype","USER");
          sessionStorage.setItem("username",res[0].username);
          sessionStorage.setItem("useremail",res[0].useremail);
          sessionStorage.setItem("userobj",JSON.stringify(res[0]));
          this.router.navigate(['/userdash']);
          console.log("Login Successful");
        }
        else{
          this.flag=false;
          this.userobj.userpass="";
          console.log("Login Failed");
        }
      })
    }
    
  }

}
