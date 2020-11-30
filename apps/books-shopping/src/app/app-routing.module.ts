import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shopping-books/cart/cart.component';
import { MycollectionComponent } from './shopping-books/mycollection/mycollection.component';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './shopping-books/search/search.component';
import { BookDetailsPageComponent } from './shopping-books/book-details-page/book-details-page.component';
import { CommonModule } from '@angular/common';
//import {SearchModule} from './shopping-books/search/search.module'
const appRoutes:Routes=[
  {path:'search',component:SearchComponent},
  {path:'book-details/:id',component:BookDetailsPageComponent},
  {path:'cart',component:CartComponent},
  {path:'collection',component:MycollectionComponent}
  ];

@NgModule({
  declarations: [CartComponent,MycollectionComponent,LayoutComponent,SearchComponent,BookDetailsPageComponent],
  imports: [RouterModule.forRoot(appRoutes),MaterialModule,FormsModule,  CommonModule
    
  ]
  ,exports:[RouterModule,LayoutComponent]
})
export class AppRoutingModule { }
