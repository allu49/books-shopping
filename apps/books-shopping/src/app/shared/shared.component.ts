import { Component, Input, OnInit } from '@angular/core';
import { BookItems } from '../shopping-books/book';
import { SearchService } from '../shopping-books/search/search.service';

@Component({
  selector: 'books-shopping-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  @Input() book: BookItems;
  @Input() cart: boolean;

  constructor(private _service: SearchService) {}

  ngOnInit(): void {}
  removeFromCart(id: string) {
    this._service.deleteFromCart(id);
  }
}
