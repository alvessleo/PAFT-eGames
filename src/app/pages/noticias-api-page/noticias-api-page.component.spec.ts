import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasApiPageComponent } from './noticias-api-page.component';

describe('NoticiasApiPageComponent', () => {
  let component: NoticiasApiPageComponent;
  let fixture: ComponentFixture<NoticiasApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasApiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
