import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { SharedComponent } from './shared/shared.component';
import {
  BillingPageComponent,
  DialogElementsExampleDialog,
} from './shopping-books/billing-page/billing-page.component';
import { BookDetailsComponent } from './shopping-books/book-details/book-details.component';
import { CartComponent } from './shopping-books/cart/cart.component';
import { MycollectionComponent } from './shopping-books/mycollection/mycollection.component';
import { SearchComponent } from './shopping-books/search/search.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'cart', component: CartComponent },
  { path: 'collection', component: MycollectionComponent },
  { path: 'book-details/:id/:searchValue', component: BookDetailsComponent },
  { path: 'billing', component: BillingPageComponent },
];

@NgModule({
  declarations: [
    SharedComponent,
    SearchComponent,
    CartComponent,
    MycollectionComponent,
    LayoutComponent,
    BookDetailsComponent,
    BillingPageComponent,
    DialogElementsExampleDialog,
  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule, LayoutComponent],
})
export class AppRoutingModule {}
