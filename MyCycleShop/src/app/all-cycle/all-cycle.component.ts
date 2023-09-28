import { Component } from '@angular/core';
import { cycle } from '../cycle';
import { CycleService } from '../cycle.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthService as AS } from '../auth.service';

@Component({
  selector: 'app-all-cycle',
  templateUrl: './all-cycle.component.html',
  styleUrls: ['./all-cycle.component.css']
})
export class AllCycleComponent {
  cycles: cycle[] = [];

  constructor(private cycleService: CycleService, private router: Router, private authService: AuthService, private myAuthService: AS) {}

  ngOnInit() {
    this.cycleService.findAll().subscribe(res => {
      this.cycles = res;
    });
    this.authService.user$.subscribe(user => {
      this.myAuthService.login(user?.email, user?.email).subscribe(res => {
        if(res['username'] == null){
          this.myAuthService.register(user?.email, user?.email).subscribe(res => {
          });
        }
      });
    })
  }

  addToCart(cycleId: number, count: string) {
    this.cycleService.addToCart(localStorage.getItem("username"), cycleId, parseInt(count)).subscribe(res => {
      console.log(res);
    });
    window.location.reload();
  }
}
