import { Component } from '@angular/core';
import { cycle } from '../cycle';
import { CycleService } from '../cycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cycle',
  templateUrl: './all-cycle.component.html',
  styleUrls: ['./all-cycle.component.css']
})
export class AllCycleComponent {
  cycles: cycle[] = [];

  constructor(private cycleService: CycleService, private router: Router) {}

  ngOnInit() {
    this.cycleService.findAll().subscribe(res => {
      this.cycles = res;
      console.log(this.cycles);
    });
  }

  addToCart(cycleId: number, count: string) {
    this.cycleService.addToCart(localStorage.getItem("username"), cycleId, parseInt(count)).subscribe(res => {
      console.log(res);
    });
    window.location.reload();
  }
}
