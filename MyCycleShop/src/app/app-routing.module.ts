import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCycleComponent } from './all-cycle/all-cycle.component';
import { CartComponent } from './cart/cart.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';

const routes: Routes = [
  {path: "", component: AllCycleComponent},
  {path: "cart", component: CartComponent},
  {path: "login", component: LoginFormComponent},
  {path: "borrowed", component: BorrowedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
