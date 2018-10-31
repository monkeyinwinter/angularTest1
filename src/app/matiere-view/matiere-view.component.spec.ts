import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereViewComponent } from './matiere-view.component';

describe('MatiereViewComponent', () => {
  let component: MatiereViewComponent;
  let fixture: ComponentFixture<MatiereViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
