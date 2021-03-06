import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsListComponent } from './sports-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '../../../../../node_modules/@angular/core';

describe('SportsListComponent', () => {
  let component: SportsListComponent;
  let fixture: ComponentFixture<SportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsListComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
