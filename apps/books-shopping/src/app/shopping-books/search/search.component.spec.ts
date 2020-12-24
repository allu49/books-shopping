import { HttpClientModule } from '@angular/common/http';
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
import { of } from 'rxjs';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';
import { SearchComponent } from './search.component';

describe('MyCollectionComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let _service: SearchService;
  let router;
  let activatedRoute;
  let bookItems: BookItems[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
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
    fixture = TestBed.createComponent(SearchComponent);
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

  it('should assign BookItems when component is resolved', fakeAsync(() => {
    let serviceSpy = spyOn(_service, 'getBooks').and.returnValue(
      of(bookItems[0])
    );
    component.onSearchBook();
    tick();
    expect(bookItems[0].id).toBe('1');
  }));

  it('should call navigate method in  bookSelected() method and navigate to book-details page', async(() => {
    const navigateSpy = spyOn(router, 'navigate');
    component.searchvalue = 'java';
    component.bookSelected(bookItems[0].id);
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith([
      '/book-details',
      bookItems[0].id,
      'java',
    ]);
  }));
});
