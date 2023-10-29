import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitaComponent } from './direita.component';

describe('DireitaComponent', () => {
  let component: DireitaComponent;
  let fixture: ComponentFixture<DireitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DireitaComponent]
    });
    fixture = TestBed.createComponent(DireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
