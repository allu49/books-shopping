import { Component, OnInit } from '@angular/core';
import { BookItems } from '../book';
import { OrderDetails } from '../orderDetails';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.scss']
})
export class MycollectionComponent implements OnInit {
  purchasedBooks:BookItems[]
  orderDetails:OrderDetails[]=[{
    name:'',
    email:'',
    phoneNumber:'',
    address:''
  }];

  constructor(private _service:SearchService) { }

  ngOnInit(): void {
    this._service.collectionItems.subscribe(result=>this.purchasedBooks=result);
    this._service.orderInfo.subscribe(result=>this.orderDetails=result);
  }
  
}
