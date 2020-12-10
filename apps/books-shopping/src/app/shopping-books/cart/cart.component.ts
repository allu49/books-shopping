import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  books:BookItems[]
 
  constructor(private _service:SearchService,private _router:Router) { }

  ngOnInit(): void {
    console.log("cart Initialized")
    this._service.cartBook.subscribe((result)=>this.books=result)
    console.log(this.books)
    
  }

  removeFromCart(id){
    console.log('book Id',id)
    this._service.deleteFromCart(id);

  }

  purchaseBook(book:BookItems){
   console.log("purchase book",book)
    this._router.navigate(['/billing'],{state:{...book} })
  }
  
 

}
