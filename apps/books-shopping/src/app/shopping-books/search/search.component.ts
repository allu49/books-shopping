import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from './search.service';
@Component({
  selector: 'books-shopping-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  books: BookItems[];
  searchvalue: string;

  constructor(private _search: SearchService, private router: Router) {}
  ngOnInit() {}
  onSearchBook() {
    this._search
      .getBooks(this.searchvalue)
      .subscribe((data) => (this.books = data.items));
  }
  bookSelected(id: string) {
    let searchValue = this.searchvalue;
    this.router.navigate(['/book-details', id, searchValue]);
  }
}
