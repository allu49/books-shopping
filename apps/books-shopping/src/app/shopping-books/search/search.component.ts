import { Component, OnInit } from '@angular/core';
import{SearchService} from './search.service'
import{Book, BookItems} from '../book'
import { Router } from '@angular/router';
@Component({
  selector: 'books-shopping-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  books:BookItems[];
  searchvalue:string;
  
  constructor(private _search:SearchService,private router:Router){

  }
   ngOnInit(){
    
   }
   onSearchBook(){
   this._search.getBooks(this.searchvalue).subscribe(data=>this.books=data.items);

   }
   bookSelected(id:string){
     this.router.navigate(['/book-details',id])
   }
}
