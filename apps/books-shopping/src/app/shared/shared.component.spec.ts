import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../shopping-books/search/search.service';
import { SharedComponent } from './shared.component';

describe('SharedComponent', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedComponent],
      providers: [SearchService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
