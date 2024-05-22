import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallejComponent } from './detallej.component';

describe('DetallejComponent', () => {
  let component: DetallejComponent;
  let fixture: ComponentFixture<DetallejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallejComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
