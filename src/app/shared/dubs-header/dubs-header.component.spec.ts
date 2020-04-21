import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DubsHeaderComponent } from './dubs-header.component';

describe('DubsHeaderComponent', () => {
  let component: DubsHeaderComponent;
  let fixture: ComponentFixture<DubsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DubsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DubsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
