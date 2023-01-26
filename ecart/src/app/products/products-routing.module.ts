import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegisterComponent } from '../register/register.component';


import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products.component';

import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [
 
  { path: '', component: AllProductsComponent },
  { path:'cart', component:CartComponent},
  { path:'wish-list', component:WishListComponent},
  {path:'register',component:RegisterComponent},
 {path:'login', component:LoginComponent},
  
  {path:'**', component:PageNotFoundComponent}
// { path:'all-products',component:}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
