import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  log: string = "";
  
  ngOnInit() {
    if(localStorage.getItem("username") == null){
      this.log = "Login";
    }
    else{
      this.log = "Logout";
    }
  }

  toggleLogin(){
    if(this.log == "Logout"){
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
    window.location.href = "http://localhost:4200/login";
  }
}
