import { Component } from '@angular/core';
import { CycleService } from '../cycle.service';
import { BorrowedItem } from '../BorrowedItem';

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css', '../all-cycle/all-cycle.component.css']
})
export class BorrowedListComponent {
  borrowedList: BorrowedItem[] = [];

  constructor(private cycleService: CycleService){}

  ngOnInit() {
    this.cycleService.getAllBorrowed(localStorage.getItem("username")).subscribe(res => {
      this.borrowedList = res;
    });
  }
}
