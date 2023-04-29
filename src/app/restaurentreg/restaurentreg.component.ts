import { Component, OnInit } from '@angular/core';
import { IRestaurent } from '../_models/restaurent';
import { RestaurentService } from '../_services/restaurent.service';

@Component({
  selector: 'app-restaurentreg',
  templateUrl: './restaurentreg.component.html',
  styleUrls: ['./restaurentreg.component.css']
})
export class RestaurentregComponent implements OnInit {

  constructor(public restaurentServiceObj:RestaurentService) { }
  resobj:IRestaurent={};
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  nameError:string="";
  emailError:string="";
  mobileError:string="";
  addressError:string="";
  passwordError:string="";
  passwordMatch:boolean=false;
  passwordNotMatch:boolean=false;
  flag1:boolean=true;
  ngOnInit(): void {
    this.resobj.resname="";
    this.resobj.resemail="";
    this.resobj.resmobile="";
    this.resobj.respass="";
    this.resobj.resaddress="";
    this.resobj.resconfirmpass="";
  }
  nameValidate(){
    if(this.resobj.resname==="")
            {
                this.nameError="The input field is required";
            }
            else{
                this.nameError="";
            }
  }
  emailValidate(){
    if(this.resobj.resemail==="")
            {
                this.emailError="The input field is required";
                
            }
            else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.resobj.resemail as string)==false){
              this.emailError="Invalid Email";
            }
            else{
              this.emailError="";
            }
  }
  addressValidate(){
    if(this.resobj.resaddress==="")
            {
                this.addressError="The input field is required";
            }
            else{
                this.addressError="";
            }
  }
  mobileValidate(){
      if(this.resobj.resmobile as any==="")
      {
        this.mobileError="The input field is required";
      }
      else if((this.resobj.resmobile as any)?.toString().length<10 || (this.resobj.resmobile as any)?.toString().length>10 ){
        this.mobileError="length sould be 10";
      }
      else{
        this.mobileError="";
      }
  }
  passwordValidator(){
    if(this.resobj.respass==="")
            {
                this.passwordError="The input field is required"
            }
            else if((this.resobj.respass?.length as number)<6){
                this.passwordError="Password length sould be min 6";
            }
            else{
                this.passwordError="";
            }
  }
  confirmPasswordValidator(){
     if(this.resobj.resconfirmpass===this.resobj.respass ){
      this.passwordMatch=true;
      this.passwordNotMatch=false;
  }
  else{
      this.passwordMatch=false;
      this.passwordNotMatch=true;
  }
  }
  onSubmit(){
    this.resobj.active=false;
    if(this.resobj.resname?.length==0 || this.resobj.resemail?.length==0 || (this.resobj.resmobile)?.length==0 ||
      this.resobj.resaddress?.length==0 ||this.resobj.respass?.length==0|| this.resobj.resconfirmpass?.length==0){
        alert("Fill all the input field");
    }
    else if(this.nameError!=="" || this.emailError!=="" || this.mobileError!=="" || this.addressError!=="" ||
            this.passwordError!=="" || this.passwordNotMatch==true){
              alert("Invalid field. Please fill correctly");
    }
    else{
      this.restaurentServiceObj.RestaurentRegUsingPost(this.resobj)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
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
    
  }
}
