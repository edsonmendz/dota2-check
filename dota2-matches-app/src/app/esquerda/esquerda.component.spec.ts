import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquerdaComponent } from './esquerda.component';

describe('EsquerdaComponent', () => {
  let component: EsquerdaComponent;
  let fixture: ComponentFixture<EsquerdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsquerdaComponent]
    });
    fixture = TestBed.createComponent(EsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
