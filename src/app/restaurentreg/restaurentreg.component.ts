import { Component, OnInit } from '@angular/core';
import { IRestaurent } from '../_models/restaurent';
import { RestaurentService } from '../_services/restaurent.service';

@Component({
  selector: 'app-restaurentreg',
  templateUrl: './restaurentreg.component.html',
  styleUrls: ['./restaurentreg.component.css']
})
export class RestaurentregComponent implements OnInit {

  constructor(public resobj:IRestaurent,public restaurentServiceObj:RestaurentService) { }
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  flag1:boolean=true;
  ngOnInit(): void {
  }
  onSubmit(){
    this.resobj.active=false;
    if(this.resobj.resconfirmpass==this.resobj.respass){
      this.restaurentServiceObj.RestaurentRegUsingPost(this.resobj)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
          console.log("Welcome User");
          this.resobj.resname="";
          this.resobj.resemail="";
          this.resobj.resmobile="";
          this.resobj.respass="";
          this.resobj.resaddress="";
          this.resobj.resconfirmpass="";
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
