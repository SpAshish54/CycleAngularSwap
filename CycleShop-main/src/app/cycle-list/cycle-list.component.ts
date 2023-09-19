// import { Component, OnInit } from '@angular/core';
// import { Cycle } from '/home/hyndavi24/MyCycleShop/src/app/cycle';
// import { CYCLES } from '/home/hyndavi24/MyCycleShop/src/app/mock-cycle';

// @Component({
//   selector: 'app-cycle-list',
//   templateUrl: './cycle-list.component.html',
//   styleUrls: ['./cycle-list.component.css']
// })

// export class CycleListComponent   {
//   cyclesl: Cycle = {
//     id: 1,
//     name: 'Ladybird'
//   };
//   cycles = CYCLES;
//   selectedCycle?: Cycle;

//   onSelect(cycle: Cycle): void {
//     this.selectedCycle = cycle;
//     console.log()
//   }
//   cycle = CYCLES;

//   constructor() { }

//   ngOnInit(): void {
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CycleService } from '/home/hyndavi24/MyCycleShop/src/app/cycle.service';
@Component({
  selector: 'app-cycle-list',
  templateUrl: './cycle-list.component.html',
  styleUrls: ['./cycle-list.component.css']
})
export class CycleListComponent implements OnInit {
  cycles: any[] = [];
  selectedCycleId: number = 0;

  constructor(private cycleService: CycleService) {}

  fetchCycles() {
    this.cycleService.listAvailableCycles().subscribe((data) => {
      this.cycles = data;
    });
  }

  borrowCycle() {
    console.log(this.selectedCycleId)
    if (this.selectedCycleId > 0) {
      this.cycleService.borrowCycle(this.selectedCycleId, 1).subscribe(() => {
        alert('Cycle borrowed successfully');
        this.fetchCycles();
      });
    } else {
      alert('Please select a cycle to borrow.');
    }
  }

  returnCycle() {
    if (this.selectedCycleId > 0) {
      this.cycleService.returnCycle(this.selectedCycleId, 1).subscribe(() => {
        alert('Cycle returned successfully');
        this.fetchCycles();
      });
    } else {
      alert('Please select a cycle to return.');
    }
  }

  restockCycle() {
    if (this.selectedCycleId > 0) {
      this.cycleService.restockCycle(this.selectedCycleId, 1).subscribe(() => {
        alert('Cycles restocked successfully');
        this.fetchCycles();
      });
    } else {
      alert('Please select a cycle to restock.');
    }
  }

  ngOnInit() {
    this.fetchCycles();
  }
}
