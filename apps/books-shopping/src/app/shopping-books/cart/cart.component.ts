import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  books: BookItems[];
  cart: boolean = true;
  constructor(private _service: SearchService, private _router: Router) {}

  ngOnInit(): void {
    this._service.cartBook.subscribe((result) => (this.books = result));
  }

  // removeFromCart(id:string){
  //   this._service.deleteFromCart(id);

  // }

  purchaseBook(book: BookItems) {
    this._router.navigate(['/billing'], { state: { ...book } });
  }
}
