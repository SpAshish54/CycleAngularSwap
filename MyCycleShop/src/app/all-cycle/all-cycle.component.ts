import { Component } from '@angular/core';
import { cycle } from '../cycle';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'app-all-cycle',
  templateUrl: './all-cycle.component.html',
  styleUrls: ['./all-cycle.component.css']
})
export class AllCycleComponent {
  cycles: cycle[] = [];

  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.findAll().subscribe(res => {
      this.cycles = res;
      console.log(this.cycles);
    });
  }

  addToCart(cycleId: number, count: string) {
    console.log(cycleId);
    this.cycleService.addToCart(1, cycleId, parseInt(count)).subscribe(res => {
      console.log(res);
    });
  }
}
