import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';
import { CartComponent } from './cart.component';

describe('MyCollectionComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let _service: SearchService;
  let router;
  let bookItems: BookItems[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SearchService],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        FormsModule,
        MatListModule,
        RouterTestingModule,
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    _service = TestBed.inject(SearchService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookItems = [
      {
        kind: '1',
        id: '1',
        etag: '',
        selfLink: '',
        volumeInfo: {
          title: '',
          description: '',
          ratingsCount: '',
          pageCount: '',
          language: '',
          imageLinks: {
            smallThumbnail: '',
            thumbnail: '',
          },
          publisher: '',
        },
        saleInfo: null,
        accessInfo: null,
        searchInfo: null,
        purchaseInfo: null,
        removeCartSymbole: false,
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign cartBooks when component is resolved', fakeAsync(() => {
    _service.cartBook = of(bookItems);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.books[0].id).toBe('1');
  }));

  it('should call navigate method in  purchaseClicked() method and navigate to billingDetails page', async(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.purchaseBook(bookItems[0]);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/billing'], {
      state: { ...bookItems[0] },
    });
  }));
});
