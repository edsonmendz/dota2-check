import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMatchesComponent } from './compare-matches.component';

describe('CompareMatchesComponent', () => {
  let component: CompareMatchesComponent;
  let fixture: ComponentFixture<CompareMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareMatchesComponent]
    });
    fixture = TestBed.createComponent(CompareMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
