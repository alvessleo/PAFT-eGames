import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSuggestComponent } from './item-suggest.component';

describe('ItemSuggestComponent', () => {
  let component: ItemSuggestComponent;
  let fixture: ComponentFixture<ItemSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
