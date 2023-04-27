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

  constructor(public adminobj:IAdmin,public adminserviceobj:AdminService,public router:Router) { }
  flag:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
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
