import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCompanyprofileComponent } from './add-edit-companyprofile.component';

describe('AddEditCompanyprofileComponent', () => {
  let component: AddEditCompanyprofileComponent;
  let fixture: ComponentFixture<AddEditCompanyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditCompanyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCompanyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
