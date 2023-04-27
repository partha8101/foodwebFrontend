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

  constructor(public userobj:IUser,public userserviceobj:UserService,public router:Router) { }
  flag:boolean=true;
  ngOnInit(): void {
  }

  onSubmit(){
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
