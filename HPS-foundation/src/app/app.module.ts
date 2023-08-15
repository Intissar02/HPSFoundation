import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'


import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ShopComponent } from './shop/shop.component';
import { StaffComponent } from './staff/staff.component';
import { DocsComponent } from './docs/docs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

//http


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DonateComponent,
    ShopComponent,
    StaffComponent,
    DocsComponent,
    GalleryComponent,
    RegisterComponent,
    NewsComponent,
    ProjectsComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    //   **ContactusComponent,
  
 ],
 bootstrap: [AppComponent], 
})
export class AppModule { }
