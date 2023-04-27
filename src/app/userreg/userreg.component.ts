import { Component, OnInit } from '@angular/core';
import { IUser } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  constructor(public userobj:IUser,public userserviceobj:UserService) { }
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  flag1:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.userobj.userconfirmpass==this.userobj.userpass){
      this.userserviceobj.UserRegUsingPost(this.userobj)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
          console.log("Welcome User");
          this.userobj.username="";
          this.userobj.useremail="";
          this.userobj.usermobile="";
          this.userobj.userpass="";
          this.userobj.useraddress="";
          this.userobj.userconfirmpass="";
          this.showmsg2=true;
          this.showmsg1=false;
        }
        else{
          this.showmsg1=true;
          this.showmsg2=false;
        }
      })
    }
    else{
      this.flag1=false;
    }
    
  }

}
