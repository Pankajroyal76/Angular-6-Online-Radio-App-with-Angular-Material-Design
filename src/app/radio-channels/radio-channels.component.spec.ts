import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChannelsComponent } from './radio-channels.component';

describe('RadioChannelsComponent', () => {
  let component: RadioChannelsComponent;
  let fixture: ComponentFixture<RadioChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioChannelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
