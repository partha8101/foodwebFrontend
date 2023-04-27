import { Component, OnInit } from '@angular/core';
import { IAdmin } from '../_models/admin';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent implements OnInit {
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  constructor(public adminobj:IAdmin,public adminserviceobj:AdminService) { }
  flag1:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.adminobj.adminconfirmpass==this.adminobj.adminpass){
      this.adminserviceobj.AdminRegUsingPost(this.adminobj)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
          console.log("Welcome User");
          this.adminobj.adminname="";
          this.adminobj.adminemail="";
          this.adminobj.adminmobile="";
          this.adminobj.adminpass="";
          this.adminobj.adminaddress="";
          this.adminobj.adminconfirmpass="";
          this.showmsg2=true;
          this.showmsg1=false;
        }
        else{
          this.showmsg1=true;
          this.showmsg2=false;
        }
      })
      this.flag1=true;
    }
    else{
      this.flag1=false;
    }
    
  }

}
