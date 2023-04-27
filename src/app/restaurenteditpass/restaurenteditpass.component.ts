import { Component, OnInit } from '@angular/core';
import { IRestaurent } from '../_models/restaurent';
import { RestaurentService } from '../_services/restaurent.service';

@Component({
  selector: 'app-restaurenteditpass',
  templateUrl: './restaurenteditpass.component.html',
  styleUrls: ['./restaurenteditpass.component.css']
})
export class RestaurenteditpassComponent implements OnInit {

  constructor(public resServiceObj:RestaurentService,public resobj:IRestaurent) { }
  isActive:boolean=true;
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  flag1:boolean=true;
  resemail:any=sessionStorage.getItem("resemail");
  robj:any=sessionStorage.getItem("resobj");
  ngOnInit(): void {
    this.resobj=JSON.parse(this.robj);
    this.resobj.respass="";
    this.resServiceObj.isResActive(this.resemail)
    .subscribe((res:any)=>{
      this.isActive=res.active;
    })
  }
  IsRestaurentLogin(){
    return (sessionStorage.getItem("restype")==="RESTAURENT");
  }

  onSubmit(){
    if(this.resobj.resconfirmpass==this.resobj.resnewpass){
    this.resServiceObj.RestaurentLoginUsingPost(this.resobj)
      .subscribe((res:any)=>{
        if(res.length>0){
          this.resServiceObj.ResUpadtePassUsingPut(this.resobj)
            .subscribe((res1:any)=>{
              console.log(res1[0]);
              this.showmsg2=true;
              this.showmsg1=false;
              this.resobj.respass="";
              this.resobj.resnewpass="";
            })
        }
        else{
          this.showmsg1=true;
          this.showmsg2=false;
          this.resobj.respass="";
          this.resobj.resnewpass="";
        }
      })
    }
    else{
      this.flag1=false;
    }
  }

}
