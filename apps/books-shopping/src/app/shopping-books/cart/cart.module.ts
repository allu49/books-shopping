import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CartComponent } from './cart.component';

const cartRoute: Routes = [{ path: '', component: CartComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoute),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class CartModule {}
