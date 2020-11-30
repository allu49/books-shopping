import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.scss']
})
export class BookDetailsPageComponent implements OnInit {
  id:any;
  books:BookItems[]=[];
 

  constructor(private _activatedRoute:ActivatedRoute,private _service:SearchService) { }

  ngOnInit(): void {
   this._activatedRoute.params.subscribe((value:Params)=>this.id=value);
   
  }



}
