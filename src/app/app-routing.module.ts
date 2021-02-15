import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';
import {CountryComponent} from './country/country.component';
import { LanguageComponent } from './language/language.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';

const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent},
{path:'country',component:CountryComponent},
{path:'language',component:LanguageComponent},
{path:'companyProfile',component:CompanyprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
