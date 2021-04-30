import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleatComponent } from './delete.component';

describe('DeleatComponent', () => {
  let component: DeleatComponent;
  let fixture: ComponentFixture<DeleatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
