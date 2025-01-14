import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipAutoCompleteComponent } from './chip-auto-complete.component';

describe('ChipAutoCompleteComponent', () => {
  let component: ChipAutoCompleteComponent;
  let fixture: ComponentFixture<ChipAutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipAutoCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
