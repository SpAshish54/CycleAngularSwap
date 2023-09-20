import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCycleComponent } from './all-cycle/all-cycle.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: "", component: AllCycleComponent},
  {path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
