import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFetureComponent } from './new-feture.component';

describe('NewFetureComponent', () => {
  let component: NewFetureComponent;
  let fixture: ComponentFixture<NewFetureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFetureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFetureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
