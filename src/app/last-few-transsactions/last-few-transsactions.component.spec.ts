import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewTranssactionsComponent } from './last-few-transsactions.component';

describe('LastFewTranssactionsComponent', () => {
  let component: LastFewTranssactionsComponent;
  let fixture: ComponentFixture<LastFewTranssactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewTranssactionsComponent]
    });
    fixture = TestBed.createComponent(LastFewTranssactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
