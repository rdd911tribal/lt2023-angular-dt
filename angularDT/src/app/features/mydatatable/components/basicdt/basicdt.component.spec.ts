import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDTComponent } from './basicdt.component';

describe('MydtComponent', () => {
  let component: BasicDTComponent;
  let fixture: ComponentFixture<BasicDTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicDTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
