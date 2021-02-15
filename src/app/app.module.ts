import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { AddEditCountryComponent } from './country/add-edit-country/add-edit-country.component';
import { ShowCountryComponent } from './country/show-country/show-country.component';
import { LanguageComponent } from './language/language.component';
import { AddEditLanguageComponent } from './language/add-edit-language/add-edit-language.component';
import { ShowLanguageComponent } from './language/show-language/show-language.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { ShowCompanyprofileComponent } from './companyprofile/show-companyprofile/show-companyprofile.component';
import { AddEditCompanyprofileComponent } from './companyprofile/add-edit-companyprofile/add-edit-companyprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CountryComponent,
    AddEditCountryComponent,
    ShowCountryComponent,
    LanguageComponent,
    AddEditLanguageComponent,
    ShowLanguageComponent,
    CompanyprofileComponent,
    ShowCompanyprofileComponent,
    AddEditCompanyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
