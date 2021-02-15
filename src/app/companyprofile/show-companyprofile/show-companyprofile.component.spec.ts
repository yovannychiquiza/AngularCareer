import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompanyprofileComponent } from './show-companyprofile.component';

describe('ShowCompanyprofileComponent', () => {
  let component: ShowCompanyprofileComponent;
  let fixture: ComponentFixture<ShowCompanyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCompanyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
