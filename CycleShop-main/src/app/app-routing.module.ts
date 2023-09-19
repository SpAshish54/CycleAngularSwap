// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CycleListComponent } from './cycle-list/cycle-list.component'; // Import your component here

const routes: Routes = [
  { path: '', redirectTo: '/cycle-list', pathMatch: 'full' }, // Redirect to the cycle-shop component
  { path: 'cycle-list', component: CycleListComponent }, // Route for the cycle-shop component
  // Add other routes for different components here if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
