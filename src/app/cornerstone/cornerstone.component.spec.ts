import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstoneComponent } from './cornerstone.component';

describe('CornerstoneComponent', () => {
  let component: CornerstoneComponent;
  let fixture: ComponentFixture<CornerstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
