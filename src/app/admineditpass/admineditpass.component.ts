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
  oldPassError:string="";
  newPassError:string="";
  passwordMatch:boolean=false;
  passwordNotMatch:boolean=false;


  flag1:boolean=true;
  
  obj:any=sessionStorage.getItem("adminobj");
  ngOnInit(): void {
    this.adminobj.adminpass="";
    this.adminobj.adminnewpass="";
    this.adminobj.adminconfirmpass="";

    let newadminobj = JSON.parse(this.obj);
    console.log(newadminobj);
    this.adminobj.adminname = newadminobj.adminname;
    this.adminobj.adminemail = newadminobj.adminemail;
    //this.adminobj.emppass = newadminobj.emppass;
  }

  oldPassValidate(){
    if(this.adminobj.adminpass===""){
      this.oldPassError="The input field is required";
    }
    else{
      this.oldPassError="";
    }
  }
  newPassValidate(){
    if(this.adminobj.adminnewpass===""){
      this.newPassError="The input field is required";
    }
    else if((this.adminobj.adminnewpass as string)?.length<6){
      this.newPassError="length sould be min 6";
    }
    else{
      this.newPassError="";
    }
  }

  confirmPassValidate(){
    if(this.adminobj.adminconfirmpass===this.adminobj.adminnewpass ){
      this.passwordMatch=true;
      this.passwordNotMatch=false;
  }
  else{
      this.passwordMatch=false;
      this.passwordNotMatch=true;
  }
  }

  onSubmit(){
    if(this.adminobj.adminpass?.length==0 || this.adminobj.adminnewpass?.length==0 || this.adminobj.adminconfirmpass?.length==0){
      alert("Fill all the input field");
    }
    else if(this.passwordNotMatch==true || this.oldPassError!=="" ||this.newPassError!==""){
      alert("Invalid field. Please fill correctly");
    }
    else{
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
    
      
  }
  isAdminlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('admintype')==="ADMIN");
  }

}
