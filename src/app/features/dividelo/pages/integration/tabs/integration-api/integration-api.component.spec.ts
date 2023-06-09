import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationApiComponent } from './integration-api.component';

describe('IntegrationApiComponent', () => {
  let component: IntegrationApiComponent;
  let fixture: ComponentFixture<IntegrationApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationApiComponent]
    });
    fixture = TestBed.createComponent(IntegrationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
