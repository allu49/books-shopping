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
import { OrderDetails } from '../orderDetails';
import { SearchService } from '../search/search.service';
import { MycollectionComponent } from './mycollection.component';

describe('MyCollectionComponent', () => {
  let component: MycollectionComponent;
  let fixture: ComponentFixture<MycollectionComponent>;
  let _service: SearchService;
  let router;
  let bookItems: BookItems[];
  let orderDetails: OrderDetails[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MycollectionComponent],
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
    fixture = TestBed.createComponent(MycollectionComponent);
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
    orderDetails = [
      {
        name: 'java',
        email: '',
        phoneNumber: '9817161',
        address: '',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign myCollectionBooks when component is resolved', fakeAsync(() => {
    _service.orderInfo = of(orderDetails);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.orderDetails[0].name).toBe('java');
    expect(component.orderDetails[0].phoneNumber).toBe('9817161');
  }));
});
