import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestItemApiComponent } from './newest-item-api.component';

describe('NewestItemApiComponent', () => {
  let component: NewestItemApiComponent;
  let fixture: ComponentFixture<NewestItemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewestItemApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestItemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
