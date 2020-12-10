import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const cartRoute:Routes=[
  {path:'',component:CartComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoute),
    MaterialModule,
    FormsModule,
     ReactiveFormsModule
  ],
  exports:[RouterModule]
})
export class CartModule { }
