import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resdash',
  templateUrl: './resdash.component.html',
  styleUrls: ['./resdash.component.css']
})
export class ResdashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  isReslogin():boolean{
    //this.adminname=sessionStorage.getItem("adminname");
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('restype')==="RESTAURENT");
  }

}
