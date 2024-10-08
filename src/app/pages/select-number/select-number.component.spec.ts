import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNumberComponent } from './select-number.component';

describe('SelectNumberComponent', () => {
  let component: SelectNumberComponent;
  let fixture: ComponentFixture<SelectNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
