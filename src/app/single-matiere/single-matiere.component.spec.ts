import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatiereComponent } from './single-matiere.component';

describe('SingleMatiereComponent', () => {
  let component: SingleMatiereComponent;
  let fixture: ComponentFixture<SingleMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
