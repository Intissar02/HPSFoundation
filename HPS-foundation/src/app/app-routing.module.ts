import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { ShopComponent } from './shop/shop.component';
import { StaffComponent } from './staff/staff.component';
import { DocsComponent } from './docs/docs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "donate", component: DonateComponent },
  { path: "shop", component: ShopComponent },
  { path: "staff", component: StaffComponent },
  { path: "docs", component: DocsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "news", component: NewsComponent },
  { path: "projects", component: ProjectsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
