import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMapsComponent } from './user-maps.component';

describe('UserMapsComponent', () => {
  let component: UserMapsComponent;
  let fixture: ComponentFixture<UserMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
