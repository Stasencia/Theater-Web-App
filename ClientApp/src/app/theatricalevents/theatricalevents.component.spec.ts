import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatricaleventsComponent } from './theatricalevents.component';

describe('TheatricaleventsComponent', () => {
  let component: TheatricaleventsComponent;
  let fixture: ComponentFixture<TheatricaleventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatricaleventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatricaleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
