import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BignameComponent } from './bigname.component';

describe('BignameComponent', () => {
  let component: BignameComponent;
  let fixture: ComponentFixture<BignameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BignameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BignameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
