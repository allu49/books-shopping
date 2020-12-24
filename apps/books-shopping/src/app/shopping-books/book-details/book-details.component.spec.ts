import { HttpClientModule } from '@angular/common/http';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { act } from '@ngrx/effects';
import { observable, Observable, of } from 'rxjs';
import { BillingPageComponent } from '../billing-page/billing-page.component';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';
import { BookDetailsComponent } from './book-details.component';

describe('MyCollectionComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let _service: SearchService;
  let router;
  let activatedRoute;
  let bookItems: BookItems[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
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
    fixture = TestBed.createComponent(BookDetailsComponent);
    _service = TestBed.inject(SearchService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
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

  it('should assign book id ans search value when component is resolved', async(() => {
    activatedRoute.Params = {
      id: '1',
      searchValue: 'java',
    };
    activatedRoute.params = of(activatedRoute.Params);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.id).toBe('1');
    expect(component.searchValue).toBe('java');
  }));
  it('should assign BookItems when component is resolved', fakeAsync(() => {
    let serviceSpy = spyOn(_service, 'getBook').and.returnValue(
      of(bookItems[0])
    );
    component.ngOnInit();
    tick();
    expect(bookItems[0].id).toBe('1');
  }));

  it('should call navigate method in  purchaseClicked() method and navigate to billingDetails page', async(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.purchaseBook(bookItems[0]);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith(['/billing'], {
      state: { ...bookItems[0] },
    });
  }));

  it('should add Item to cart when addToCart button is clicked', async(() => {
    const addBtnClickedSpy = spyOn(component, 'addToCart').and.callThrough();
    component.addToCart(bookItems[0]);
    fixture.detectChanges();
    expect(addBtnClickedSpy).toHaveBeenCalled();
  }));
});
