import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartDetailPage } from './cart-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CartDetailPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [CartDetailPage]
})
export class CartDetailPageModule {}
