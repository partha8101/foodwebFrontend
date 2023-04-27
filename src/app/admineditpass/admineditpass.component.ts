import { Component, OnInit } from '@angular/core';
import { IAdmin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admineditpass',
  templateUrl: './admineditpass.component.html',
  styleUrls: ['./admineditpass.component.css']
})
export class AdmineditpassComponent implements OnInit {

  constructor(public adminobj:IAdmin,public adminserviceobj:AdminService) { }
  
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  flag1:boolean=true;
  
  obj:any=sessionStorage.getItem("adminobj");
  ngOnInit(): void {
    let newadminobj = JSON.parse(this.obj);
    console.log(newadminobj);
    this.adminobj.adminname = newadminobj.adminname;
    this.adminobj.adminemail = newadminobj.adminemail;
    //this.adminobj.emppass = newadminobj.emppass;
  }

  onSubmit(){
    if(this.adminobj.adminconfirmpass==this.adminobj.adminnewpass){
      this.adminserviceobj.AdminLoginUsingPost(this.adminobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.adminserviceobj.adminUpadtePassUsingPut(this.adminobj)
            .subscribe((res1:any)=>{
              console.log(res1[0]);
              this.showmsg2=true;
              this.showmsg1=false;
              this.adminobj.adminpass="";
              this.adminobj.adminnewpass="";
            })
        }
        else{
          this.showmsg1=true;
          this.showmsg2=false;
          this.adminobj.adminpass="";
          this.adminobj.adminnewpass="";
        }
      })
    }
    else{
      this.flag1=false;
    }
    
      
  }
  isAdminlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('admintype')==="ADMIN");
  }

}
