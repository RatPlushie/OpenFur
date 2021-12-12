import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMessagesComponent } from './body-messages.component';

describe('BodyMessagesComponent', () => {
  let component: BodyMessagesComponent;
  let fixture: ComponentFixture<BodyMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
