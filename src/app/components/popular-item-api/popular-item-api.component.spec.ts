import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularItemApiComponent } from './popular-item-api.component';

describe('PopularItemApiComponent', () => {
  let component: PopularItemApiComponent;
  let fixture: ComponentFixture<PopularItemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularItemApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularItemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
