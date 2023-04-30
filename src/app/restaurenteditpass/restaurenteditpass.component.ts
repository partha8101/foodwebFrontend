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
  oldPassError:string="";
  newPassError:string="";

  passwordMatch:boolean=false;
  passwordNotMatch:boolean=false;
  resemail:any=sessionStorage.getItem("resemail");
  robj:any=sessionStorage.getItem("resobj");
  ngOnInit(): void {

    this.resobj=JSON.parse(this.robj);
    this.resobj.respass="";
    this.resobj.resnewpass="";
    this.resobj.resconfirmpass="";
    this.resServiceObj.isResActive(this.resemail)
    .subscribe((res:any)=>{
      this.isActive=res.active;
    })
  }
  IsRestaurentLogin(){
    return (sessionStorage.getItem("restype")==="RESTAURENT");
  }

  oldPassValidate(){
    if(this.resobj.respass===""){
      this.oldPassError="The input field is required";
    }
    else{
      this.oldPassError="";
    }
  }
  newPassValidate(){
    if(this.resobj.resnewpass===""){
      this.newPassError="The input field is required";
    }
    else if((this.resobj.resnewpass as string)?.length<6){
      this.newPassError="length sould be min 6";
    }
    else{
      this.newPassError="";
    }
  }

  confirmPassValidate(){
    if(this.resobj.resconfirmpass===this.resobj.resnewpass ){
      this.passwordMatch=true;
      this.passwordNotMatch=false;
  }
  else{
      this.passwordMatch=false;
      this.passwordNotMatch=true;
  }
  }

  onSubmit(){
    if(this.resobj.respass?.length==0 || this.resobj.resnewpass?.length==0 || this.resobj.resconfirmpass?.length==0){
      alert("Fill all the input field");
    }
    else if(this.passwordNotMatch==true || this.oldPassError!=="" ||this.newPassError!==""){
      alert("Invalid field. Please fill correctly");
    }
    else{
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
  }

}
