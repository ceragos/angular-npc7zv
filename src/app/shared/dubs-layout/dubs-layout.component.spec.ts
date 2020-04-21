import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DubsLayoutComponent } from './dubs-layout.component';

describe('DubsLayoutComponent', () => {
  let component: DubsLayoutComponent;
  let fixture: ComponentFixture<DubsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DubsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DubsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
