import { Component, OnInit } from '@angular/core';
import { IUser } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-usereditpass',
  templateUrl: './usereditpass.component.html',
  styleUrls: ['./usereditpass.component.css']
})
export class UsereditpassComponent implements OnInit {

  constructor(public userobj:IUser,public userserviceobj:UserService) { }
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  flag1:boolean=true;
  oldPassError:string="";
  newPassError:string="";

  passwordMatch:boolean=false;
  passwordNotMatch:boolean=false;
  
  obj:any=sessionStorage.getItem("userobj");
  ngOnInit(): void {
    this.userobj.userpass="";
    this.userobj.usernewpass="";
    this.userobj.userconfirmpass="";

    
    let newuserobj = JSON.parse(this.obj);
    console.log(newuserobj);
    this.userobj.username = newuserobj.username;
    this.userobj.useremail = newuserobj.useremail;
    //this.userobj.emppass = newuserobj.emppass;
  }

  isUserlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('usertype')==="USER");
  }

  oldPassValidate(){
    if(this.userobj.userpass===""){
      this.oldPassError="The input field is required";
    }
    else{
      this.oldPassError="";
    }
  }
  newPassValidate(){
    if(this.userobj.usernewpass===""){
      this.newPassError="The input field is required";
    }
    else if((this.userobj.usernewpass as string)?.length<6){
      this.newPassError="length sould be min 6";
    }
    else{
      this.newPassError="";
    }
  }

  confirmPassValidate(){
    if(this.userobj.userconfirmpass===this.userobj.usernewpass ){
      this.passwordMatch=true;
      this.passwordNotMatch=false;
  }
  else{
      this.passwordMatch=false;
      this.passwordNotMatch=true;
  }
  }
  
  onSubmit(){
    if(this.userobj.userpass?.length==0 || this.userobj.usernewpass?.length==0 || this.userobj.userconfirmpass?.length==0){
      alert("Fill all the input field");
    }
    else if(this.passwordNotMatch==true || this.oldPassError!=="" ||this.newPassError!==""){
      alert("Invalid field. Please fill correctly");
    }
    else{
      this.userserviceobj.UserLoginUsingPost(this.userobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.userserviceobj.userUpadtePassUsingPut(this.userobj)
            .subscribe((res1:any)=>{
              console.log(res1[0]);
              this.showmsg2=true;
              this.showmsg1=false;
              this.userobj.userpass="";
              this.userobj.usernewpass="";
            })
        }
        else{
          this.showmsg1=true;
          this.showmsg2=false;
          this.userobj.userpass="";
          this.userobj.usernewpass="";
        }
      })
    }
    
  }

}
