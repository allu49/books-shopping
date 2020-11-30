import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { BookDetailsPageComponent } from '../book-details-page/book-details-page.component';
// const searchRoutes:Routes=[
//   {path:'',component:SearchComponent,children:[
//     {path:'book-details/:id',component:BookDetailsPageComponent}
//   ]}
//   ];



@NgModule({
  declarations: [SearchComponent,BookDetailsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,FormsModule
  ],
  exports:[RouterModule]
})
export class SearchModule { }
