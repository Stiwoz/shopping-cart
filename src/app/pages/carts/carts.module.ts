import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CartsPage } from './carts.page';

const routes: Routes = [
  {
    path: '',
    component: CartsPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [CartsPage]
})
export class CartsPageModule {}
