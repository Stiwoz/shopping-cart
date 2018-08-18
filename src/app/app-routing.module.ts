import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'carts-list', pathMatch: 'full' },
  {
    path: 'carts-list',
    loadChildren: './pages/carts/carts.module#CartsPageModule'
  },
  {
    path: 'cart-detail/:cartId',
    loadChildren: './pages/cart-detail/cart-detail.module#CartDetailPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
