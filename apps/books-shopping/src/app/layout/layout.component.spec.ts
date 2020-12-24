import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SearchService } from '../shopping-books/search/search.service';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let _service: SearchService;
  let submitEl;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SearchService],
      imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        HttpClientModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    _service = TestBed.inject(SearchService);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the count of cart with a new one', fakeAsync(() => {
    _service.cartCount = of(1);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.cartCount).toBe(1);
  }));
  it('should change the count of cart with a new one', fakeAsync(() => {
    _service.collectionCount = of(1);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.collectionCount).toBe(1);
  }));
  it('should test click of sidnav', () => {
    spyOn(component, 'isSideNavOpen');
    let el = fixture.debugElement.query(By.css('button')).nativeElement.click();
    expect(component.isSideNavOpen).toHaveBeenCalled();
  });
});
