import { Component, OnInit } from '@angular/core';
import { IUser } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-usereditpro',
  templateUrl: './usereditpro.component.html',
  styleUrls: ['./usereditpro.component.css']
})
export class UsereditproComponent implements OnInit {

  constructor(public userobj:IUser,public userserviceobj:UserService) { }
  showmsg:boolean=true;
  username:any;
  obj:any=sessionStorage.getItem("userobj");
  ngOnInit(): void {
    this.username=sessionStorage.getItem("username");
    this.userobj = JSON.parse(this.obj);
    console.log(this.userobj);
    
    //this.userobj.emppass = newuserobj.emppass;
  }
  isUserlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('usertype')==="USER");
  }
  onSubmit(){
    this.userserviceobj.userUpdateProUsingPut(this.userobj)
    .subscribe((res:any)=>{
      console.log(res);
      this.showmsg=false;
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("userobj");
      
      sessionStorage.setItem("username",res[0].username);
      sessionStorage.setItem("userobj",JSON.stringify(res[0]));
      this.username=sessionStorage.getItem("username");
    })
  }

}


