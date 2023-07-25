import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMenuComponent } from './crear-menu.component';

describe('CrearMenuComponent', () => {
  let component: CrearMenuComponent;
  let fixture: ComponentFixture<CrearMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMenuComponent]
    });
    fixture = TestBed.createComponent(CrearMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
