import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  adminname:any="";
  username:any="";
  resname:any="";
  constructor(public router:Router) { }
  isAdminlogin():boolean{
    this.adminname=sessionStorage.getItem("adminname")+"  (Admin)";
    //return(localStorage.getItem('admin')!==null);
    return(sessionStorage.getItem('admintype')===null);
  }
  isUserlogin():boolean{
    this.username=sessionStorage.getItem("username")+"  (User)";
    //return (localStorage.getItem('usertype') !== null);
    return (sessionStorage.getItem("usertype") === null);
  }
  isRestaurentlogin():boolean{
    this.resname=sessionStorage.getItem("resname")+"  (Restaurent)";
    return (sessionStorage.getItem("restype") === null);
  }
  adminlogout()
  {
    sessionStorage.removeItem('admintype');
    sessionStorage.removeItem('adminname');
    sessionStorage.removeItem("adminemail");
    sessionStorage.removeItem("adminobj");
    sessionStorage.clear();

    this.router.navigate(['/']);
  }

  userlogout()  
  {
    sessionStorage.removeItem("usertype");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("useremail");
    sessionStorage.removeItem("userobj");
    sessionStorage.clear();

    this.router.navigate(['/']);
  }

  reslogout(){
    sessionStorage.removeItem("restype");
    sessionStorage.removeItem("resname");
    sessionStorage.removeItem("resemail");
    sessionStorage.removeItem("resobj");
    sessionStorage.clear();

    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
