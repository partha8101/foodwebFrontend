import { Component, OnInit } from '@angular/core';
import { IFood } from '../_models/food';
import { AdminService } from '../_services/admin.service';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { FileUploaderOptions } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRestaurent } from '../_models/restaurent';
import { RestaurentService } from '../_services/restaurent.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  

  uploader!: FileUploader;
  constructor(private cloudinary: Cloudinary,private http: HttpClient,
    public foodobj:IFood,public adminserviceobj:AdminService,
    public router:Router,public resServiceObj:RestaurentService,
    public resobj:IRestaurent) {}
  foodarr:IFood[]=[];
    isActive:boolean=true;
    resemail:any=sessionStorage.getItem("resemail");
    resname:any=sessionStorage.getItem("resname");
    robj:any=sessionStorage.getItem("resobj");
    resaddress=JSON.parse(this.robj).resaddress;
    nameError:string="";
    priceError:string="";
    descriptionError:string="";
  ngOnInit(): void {
    this.foodobj.productname="";
    this.foodobj.productprice="";
    this.foodobj.productdescription="";

    this.resobj=JSON.parse(this.robj);
    this.resServiceObj.isResActive(this.resemail)
      .subscribe((res:any)=>{
        this.isActive=res.active;
      })
    // Create the file uploader, wire it to upload to your account
    const uploaderOptions: FileUploaderOptions = {
      url: `https://api.cloudinary.com/v1_1/${this.cloudinary.config().cloud_name}/upload`,
      // Upload files automatically upon addition to upload queue
      autoUpload: true,
      // Use xhrTransport in favor of iframeTransport
      isHTML5: true,
      // Calculate progress independently for each uploaded file
      removeAfterUpload: true,
      // XHR request headers
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
  }
  this.uploader = new FileUploader(uploaderOptions);

    this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
      // Add Cloudinary unsigned upload preset to the upload form
      form.append('upload_preset', this.cloudinary.config().upload_preset);
      
      // Add file to upload
      form.append('file', fileItem);

      // Use default "withCredentials" value for CORS requests
      fileItem.withCredentials = false;
      
      return { fileItem, form };
    };
    this.foodobj.producturl="../../assets/images/dish.png";
  }
  showmsg1:boolean=true;
  showmsg2:boolean=true;
  
  nameValidate(){
    if(this.foodobj.productname===""){
      this.nameError="The input field is required"
    }
    else{
      this.nameError="";
    }
  }
  priceValidate(){
    console.log(this.foodobj.productprice);
    if(this.foodobj.productprice==="" || this.foodobj.productprice===null){
      this.priceError="The input field is required"
    }
    else{
      this.priceError="";
    }
  }
  descriptionValidate(){
    if(this.foodobj.productdescription===""){
      this.descriptionError="The input field is required"
    }
    else{
      this.descriptionError="";
    }
  }

  file:any;
  selectImage(event:any){
  this.file=event.target.files[0];
  console.log(this.file);
  }
  checking:string="";
  
  upload(){
    
    this.checking="Uploading..."
    //this.uploader.uploadItem(this.file);
    this.uploader.uploadAll();
    this.uploader.response
      .subscribe( (res)=>{
        
        this.foodobj.producturl=JSON.parse(res).url;
        console.log(this.foodobj.producturl);
        this.checking="Uploaded!!"
      });
  }
   submit(){
    if(this.foodobj.productname==="" || this.foodobj.productdescription==="" || this.foodobj.productprice==="" ||this.foodobj.productprice===null){
      alert("Fill all the input field");
    }
    else{
      this.foodobj.resname=this.resname;
      this.foodobj.resemail=this.resemail;
      this.foodobj.resaddress=this.resaddress;
      this.resServiceObj.uploaditem(this.foodobj)
    .subscribe((res:any)=>{
      if(res.length>0){
      console.log("Item Added");
      this.foodobj.productdescription="";
      this.foodobj.productname="";
      this.foodobj.productprice=0;
      this.foodobj.producturl="";
      
      this.checking="";
      this.showmsg1=false;
      this.showmsg2=true;
      setTimeout(() => 
      {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);})
      },
      2000);
    }
    else{
      this.showmsg2=false;
      this.showmsg1=true;
      console.log("Item Already Added");
    }
      
    })
    }
        
   }
  
  isRestaurentlogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('restype')==="RESTAURENT");
  }



}
