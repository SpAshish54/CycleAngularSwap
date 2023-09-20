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

  constructor(private cycleService: CycleService) {}

  ngOnInit() {
    this.cycleService.getCart(1).subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }

  checkout() {
    this.cycleService.checkout(1).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
