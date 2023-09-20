import { Component } from '@angular/core';
import { CartItem } from '../CartItem';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: CartItem[] = [];

  total: number = 0;

  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.getCart(localStorage.getItem("username")).subscribe(res => {
      this.items = res;
      console.log(this.items);
      for(let item of this.items){
        this.total += item.cost;
      }
    });
  }

  checkout() {
    this.cycleService.checkout(localStorage.getItem("username")).subscribe(res => {
      console.log(res);
    })
    window.location.reload();
  }
}
