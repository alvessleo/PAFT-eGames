import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonItemApiComponent } from './soon-item-api.component';

describe('SoonItemApiComponent', () => {
  let component: SoonItemApiComponent;
  let fixture: ComponentFixture<SoonItemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonItemApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoonItemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
