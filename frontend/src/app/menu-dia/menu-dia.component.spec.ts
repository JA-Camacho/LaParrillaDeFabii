import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDiaComponent } from './menu-dia.component';

describe('MenuDiaComponent', () => {
  let component: MenuDiaComponent;
  let fixture: ComponentFixture<MenuDiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuDiaComponent]
    });
    fixture = TestBed.createComponent(MenuDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
