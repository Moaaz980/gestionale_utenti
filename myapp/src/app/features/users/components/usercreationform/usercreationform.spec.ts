import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usercreationform } from './usercreationform';

describe('Usercreationform', () => {
  let component: Usercreationform;
  let fixture: ComponentFixture<Usercreationform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usercreationform],
    }).compileComponents();

    fixture = TestBed.createComponent(Usercreationform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
