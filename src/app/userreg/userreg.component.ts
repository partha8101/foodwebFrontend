import { Component, OnInit } from '@angular/core';
import { IUser } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  constructor(public userserviceobj:UserService) { }
  showmsg1:boolean=false;
  showmsg2:boolean=false;
  userobj:IUser={};
  nameError:string="";
  emailError:string="";
  mobileError:string="";
  addressError:string="";
  passwordError:string="";
  passwordMatch:boolean=false;
  passwordNotMatch:boolean=false;
  ngOnInit(): void {
    this.userobj.username="";
    this.userobj.useremail="";
    this.userobj.usermobile="";
    this.userobj.userpass="";
    this.userobj.useraddress="";
    this.userobj.userconfirmpass="";
  }
  nameValidate(){
    if(this.userobj.username==="")
            {
                this.nameError="The input field is required";
            }
            else{
                this.nameError="";
            }
  }
  emailValidate(){
    if(this.userobj.useremail==="")
            {
                this.emailError="The input field is required";
                
            }
            else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.userobj.useremail as string)==false){
              this.emailError="Invalid Email";
            }
            else{
              this.emailError="";
            }
  }
  addressValidate(){
    if(this.userobj.useraddress==="")
            {
                this.addressError="The input field is required";
            }
            else{
                this.addressError="";
            }
  }
  mobileValidate(){
      if(this.userobj.usermobile as any==="")
      {
        this.mobileError="The input field is required";
      }
      else if((this.userobj.usermobile as any)?.toString().length<10 || (this.userobj.usermobile as any)?.toString().length>10 ){
        this.mobileError="length sould be 10";
      }
      else{
        this.mobileError="";
      }
  }
  passwordValidator(){
    if(this.userobj.userpass==="")
            {
                this.passwordError="The input field is required"
            }
            else if((this.userobj.userpass?.length as number)<6){
                this.passwordError="Password length sould be min 6";
            }
            else{
                this.passwordError="";
            }
  }
  confirmPasswordValidator(){
     if(this.userobj.userconfirmpass===this.userobj.userpass ){
      this.passwordMatch=true;
      this.passwordNotMatch=false;
  }
  else{
      this.passwordMatch=false;
      this.passwordNotMatch=true;
  }
  }
  onSubmit(){
    if(this.userobj.username?.length==0 || this.userobj.useremail?.length==0 || (this.userobj.usermobile)?.length==0 ||
      this.userobj.useraddress?.length==0 ||this.userobj.userpass?.length==0|| this.userobj.userconfirmpass?.length==0){
        alert("Fill all the input field");
    }
    else if(this.nameError!=="" || this.emailError!=="" || this.mobileError!=="" || this.addressError!=="" ||
            this.passwordError!=="" || this.passwordNotMatch==true){
              alert("Invalid field. Please fill correctly");
    }
    else{
      this.userserviceobj.UserRegUsingPost(this.userobj)
      .subscribe((res:any)=>{
        console.log(res);
        if(res.length>0){
          console.log("Welcome User");
          this.userobj={
            username:"",
            useremail:"",
            usermobile:"",
            userpass:"",
            useraddress:"",
            userconfirmpass:""
          };
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
