import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCancelActionComponent } from './pop-cancel-action.component';

describe('PopCancelActionComponent', () => {
  let component: PopCancelActionComponent;
  let fixture: ComponentFixture<PopCancelActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopCancelActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopCancelActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
