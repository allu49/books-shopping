import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';



@Injectable(
)
export class SearchService {
  booksUrl:string='https://www.googleapis.com/books/v1/volumes?q='

  count:number;

  public countUp: BehaviorSubject<number> = new BehaviorSubject(0);
  cast=this.countUp.asObservable();
    constructor(private http: HttpClient) { }
   
  getBooks(value): Observable<Book> {
    return this.http.get<Book>(this.booksUrl+value)
     
  }

  public updateCount(count){
   this.count=count;
   return this.countUp.next(this.count);

  }

 
}
