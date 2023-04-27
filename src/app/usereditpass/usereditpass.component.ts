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
  
  obj:any=sessionStorage.getItem("userobj");
  ngOnInit(): void {
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

  
  onSubmit(){
    if(this.userobj.userconfirmpass==this.userobj.usernewpass){
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
    else{
      this.flag1=false;
    }
  }

}
