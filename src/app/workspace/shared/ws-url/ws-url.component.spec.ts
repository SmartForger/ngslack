import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsUrlComponent } from './ws-url.component';

describe('WsUrlComponent', () => {
  let component: WsUrlComponent;
  let fixture: ComponentFixture<WsUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
