import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllCycleComponent } from './all-cycle/all-cycle.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BorrowedListComponent } from './borrowed-list/borrowed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCycleComponent,
    CartComponent,
    LoginFormComponent,
    NavBarComponent,
    BorrowedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
