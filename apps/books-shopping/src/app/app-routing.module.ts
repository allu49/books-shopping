import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycollectionComponent } from './shopping-books/mycollection/mycollection.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BookDetailsComponent} from './shopping-books/book-details/book-details.component'
import { BillingPageComponent, DialogElementsExampleDialog } from './shopping-books/billing-page/billing-page.component';
import{SearchComponent} from './shopping-books/search/search.component'
import{CartComponent} from './shopping-books/cart/cart.component'
const appRoutes:Routes=[
  {path:'search',component:SearchComponent},
   {path:'cart',component:CartComponent},
  {path:'collection',component:MycollectionComponent},
  { path: 'book-details/:id/:searchValue', component:BookDetailsComponent },
  { path: 'billing', component:BillingPageComponent }
  ];

@NgModule({
  declarations: [SearchComponent,CartComponent,MycollectionComponent,LayoutComponent,BookDetailsComponent,BillingPageComponent,DialogElementsExampleDialog],
  
  imports: [RouterModule.forRoot(appRoutes),MaterialModule,FormsModule,  CommonModule,ReactiveFormsModule
    
  ]
  ,exports:[RouterModule,LayoutComponent]
})
export class AppRoutingModule { }
