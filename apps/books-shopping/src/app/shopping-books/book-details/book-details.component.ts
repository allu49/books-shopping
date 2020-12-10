import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'books-shopping-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  count:number=0;
  id:any;
  searchValue:any;
  book:BookItems
  books:BookItems[]=
    [{
      kind : '',
    id: '',
    etag: '',
    selfLink: '',
    volumeInfo: {
        title : '',
        description : '',
        imageLinks : {
            smallThumbnail : '',
            thumbnail : ''
        },
        publisher: ''
    },
    saleInfo: null,
    accessInfo:null,
    searchInfo: null,
    purchaseInfo: null,
    }]
  ;
    
  
 

  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _service:SearchService) { }

  ngOnInit() {
   this._activatedRoute.params.subscribe((value:Params)=>
   {
     this.id=value.id;
     this.searchValue=value.searchValue;
    });
   
   this._service.getBook(this.searchValue,this.id).subscribe((data)=>{
     console.log('data::',data)
     this.books=data
   });
  
  }
  addToCart(book){
    console.log("addTocart::",book)
    this._service.addBookToCart(book);
  }

  purchaseBook(book:BookItems){
    console.log("purchase book",book)
     this._router.navigate(['/billing'],{state:{...book} })
   }


}
