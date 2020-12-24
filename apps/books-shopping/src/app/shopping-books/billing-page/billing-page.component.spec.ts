import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookItems } from '../book';
import { SearchService } from '../search/search.service';
import { BillingPageComponent } from './billing-page.component';

describe('MyCollectionComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;
  let _service: SearchService;
  let router;
  let bookItems: BookItems[];
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BillingPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [SearchService, MatDialog],
      imports: [
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatListModule,
        RouterTestingModule,
        HttpClientModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPageComponent);
    _service = TestBed.inject(SearchService);
    router = TestBed.inject(Router);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    component.displayMessage = {
      name: 'ABC',
      email: 't@t.com',
      phoneNumber: '9999999999',
      address: 'Hyd',
    };
    component.billingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit() method', () => {
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const ngOnInitSpy = spyOn(component, 'ngOnInit');
    component.ngOnInit();

    expect(ngOnInitSpy).toHaveBeenCalled();
  });
});
