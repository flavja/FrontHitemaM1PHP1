import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentFormComponent } from './continent-form.component';

describe('ContinentFormComponent', () => {
  let component: ContinentFormComponent;
  let fixture: ComponentFixture<ContinentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
