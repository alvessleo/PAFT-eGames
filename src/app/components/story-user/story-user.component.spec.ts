import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUserComponent } from './story-user.component';

describe('StoryUserComponent', () => {
  let component: StoryUserComponent;
  let fixture: ComponentFixture<StoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
