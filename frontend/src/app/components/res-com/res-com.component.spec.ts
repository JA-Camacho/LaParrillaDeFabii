import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResComComponent } from './res-com.component';

describe('ResComComponent', () => {
  let component: ResComComponent;
  let fixture: ComponentFixture<ResComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResComComponent]
    });
    fixture = TestBed.createComponent(ResComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
