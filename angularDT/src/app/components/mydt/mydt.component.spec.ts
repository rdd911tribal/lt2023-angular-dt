import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydtComponent } from './mydt.component';

describe('MydtComponent', () => {
  let component: MydtComponent;
  let fixture: ComponentFixture<MydtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
