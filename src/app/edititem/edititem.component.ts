import { Component, OnInit } from '@angular/core';
import { IFood } from '../_models/food';
import { FileUploader } from 'ng2-file-upload';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploaderOptions } from 'ng2-file-upload';
import { AdminService } from '../_services/admin.service';
import { Router } from '@angular/router';
import { RestaurentService } from '../_services/restaurent.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  uploader!: FileUploader;
  constructor(public productobj:IFood,private cloudinary: Cloudinary,public resServiceObj:RestaurentService,public router:Router) { }
  pobj:any=sessionStorage.getItem("itemobj");
  showmsg1:boolean=true;
  ngOnInit(): void {
    this.productobj=JSON.parse(this.pobj);


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
      this.uploader.response.subscribe( (res)=>{
        
        this.productobj.producturl=""+JSON.parse(res).url;
        console.log(this.productobj.producturl);
        this.checking="Uploaded!!"
      });
  }

  update(){
    this.resServiceObj.editItemUsingPut(this.productobj)
      .subscribe((res)=>{
        console.log("Item Updated Succesfully");
        this.showmsg1=false;
        setTimeout(() => {
          sessionStorage.removeItem("itemobj");
          this.router.navigate(['/viewitem']);
        },2000);
      })

  }
  isRestaurentlogin():boolean{
    return(sessionStorage.getItem('restype')==="RESTAURENT");
  }
  back(){
    sessionStorage.removeItem("itemobj");
    this.router.navigate(['/viewitem']);
  }
}
