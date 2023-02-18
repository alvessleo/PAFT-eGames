import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCreatePostComponent } from './pop-create-post.component';

describe('PopCreatePostComponent', () => {
  let component: PopCreatePostComponent;
  let fixture: ComponentFixture<PopCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
