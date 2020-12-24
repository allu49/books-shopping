import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book, BookItems } from '../book';
import { OrderDetails } from '../orderDetails';

@Injectable()
export class SearchService {
  booksUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  // cartCout:BehaviorSubject<number>=new BehaviorSubject(0);
  orderDetails: OrderDetails[] = [];
  cartItems: BookItems[] = [];
  collectionList: BookItems[] = [];
  public checkCartCount = new BehaviorSubject(0);
  public checkCollectionCount = new BehaviorSubject(0);
  public checkCartItems: BehaviorSubject<BookItems[]> = new BehaviorSubject([]);
  public checkMyCollection: BehaviorSubject<BookItems[]> = new BehaviorSubject(
    []
  );
  public checkOrderDetails: BehaviorSubject<
    OrderDetails[]
  > = new BehaviorSubject([]);
  cartCount = this.checkCartCount.asObservable();
  collectionCount = this.checkCollectionCount.asObservable();
  cartBook = this.checkCartItems.asObservable();
  collectionItems = this.checkMyCollection.asObservable();
  orderInfo = this.checkOrderDetails.asObservable();

  constructor(private http: HttpClient) {}

  getBooks(value: string): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + value);
  }

  getBook(value: string, id: string): Observable<BookItems[]> {
    return this.http.get<Book>(this.booksUrl + value).pipe(
      map((books) =>
        books.items.filter((item) => {
          if (item.id === id) {
            return true;
          }
        })
      )
    );
  }

  public addBookToCart(book: BookItems) {
    this.cartItems.push(book);
    this.checkCartCount.next(this.cartItems.length);
    this.checkCartItems.next(this.cartItems);
    return;
  }

  public deleteFromCart(id: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.checkCartCount.next(this.cartItems.length);
    this.checkCartItems.next(this.cartItems);
  }
  public addToMyCollection(orderDetails: OrderDetails, book: BookItems) {
    this.collectionList.push(book);
    this.checkCollectionCount.next(this.collectionList.length);
    this.checkMyCollection.next(this.collectionList);
    this.orderDetails.push(orderDetails);
    this.checkOrderDetails.next(this.orderDetails);
  }
}
