import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(public adminserviceobj:AdminService,public router:Router) { }
  adminobj:IAdmin={};
  flag:boolean=true;
  emailError:string="";
  passwordError:string="";
  ngOnInit(): void {
    this.adminobj.adminemail="";
    this.adminobj.adminpass="";
  }
  emailValidate(){
    if(this.adminobj.adminemail==="")
            {
                this.emailError="The input field is required";
            }
            else{
                this.emailError="";
            }
  }
  passwordValidate(){
    if(this.adminobj.adminpass==="")
            {
                this.passwordError="The input field is required";
            }
            else{
                this.passwordError="";
            }
  }
  onSubmit(){
    if(this.adminobj.adminemail==""||this.adminobj.adminpass==""){
      alert("Fill all the input field");
    }
    else{
      this.adminserviceobj.AdminLoginUsingPost(this.adminobj)
      .subscribe((res:any)=>{
        console.log(res.length);
        if(res.length>0){
          console.log(res[0]);
          sessionStorage.setItem("admintype","ADMIN");
          sessionStorage.setItem("adminname",res[0].adminname);
          sessionStorage.setItem("adminemail",res[0].adminemail);
          sessionStorage.setItem("adminobj",JSON.stringify(res[0]));
          this.router.navigate(['/viewalluser']);
          console.log("Login Successful");
        }
        else{
          this.flag=false;
          this.adminobj.adminpass="";
          console.log("Login Failed");
        }
      })
    }
    
  }

}
