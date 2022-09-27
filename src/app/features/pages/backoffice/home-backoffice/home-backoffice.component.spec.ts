import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackofficeComponent } from './home-backoffice.component';

describe('HomeBackofficeComponent', () => {
  let component: HomeBackofficeComponent;
  let fixture: ComponentFixture<HomeBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
