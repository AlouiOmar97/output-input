import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowappartComponent } from './showappart.component';

describe('ShowappartComponent', () => {
  let component: ShowappartComponent;
  let fixture: ComponentFixture<ShowappartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowappartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowappartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
