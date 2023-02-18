import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipatedItemApiComponent } from './anticipated-item-api.component';

describe('AnticipatedItemApiComponent', () => {
  let component: AnticipatedItemApiComponent;
  let fixture: ComponentFixture<AnticipatedItemApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnticipatedItemApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnticipatedItemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
