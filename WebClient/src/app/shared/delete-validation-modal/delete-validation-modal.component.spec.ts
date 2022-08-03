import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteValidationModalComponent } from './delete-validation-modal.component';

describe('DeleteValidationModalComponent', () => {
  let component: DeleteValidationModalComponent;
  let fixture: ComponentFixture<DeleteValidationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteValidationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteValidationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
