import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IFood } from '../_models/food';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userserviceobj:UserService,public filter:Ng2SearchPipeModule) { }
  foodarr:IFood[]=[];
  searchText:string="";
  nodatafound:boolean=true;
  ngOnInit(): void {
    this.userserviceobj.getAllFoodUsingget()
      .subscribe((res:any)=>{
        if(res.length>0){
          this.foodarr=res;
          console.log(this.foodarr);
          this.nodatafound=true;
        }
        else{
          this.nodatafound=false;
        }
      })
  }

}
