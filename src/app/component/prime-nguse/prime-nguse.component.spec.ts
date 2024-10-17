import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNGUseComponent } from './prime-nguse.component';

describe('PrimeNGUseComponent', () => {
  let component: PrimeNGUseComponent;
  let fixture: ComponentFixture<PrimeNGUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNGUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeNGUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
