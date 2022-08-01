import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingConfirmComponent } from './wedding-confirm.component';

describe('WeddingConfirmComponent', () => {
  let component: WeddingConfirmComponent;
  let fixture: ComponentFixture<WeddingConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
