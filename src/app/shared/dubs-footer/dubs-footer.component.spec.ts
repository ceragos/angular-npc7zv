import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DubsFooterComponent } from './dubs-footer.component';

describe('DubsFooterComponent', () => {
  let component: DubsFooterComponent;
  let fixture: ComponentFixture<DubsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DubsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DubsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
