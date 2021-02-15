import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";
readonly APIUrlSystem="http://localhost:5000/api/careercloud/system/v1";
readonly APIUrlCompany="http://localhost:5000/api/careercloud/company/v1";
readonly PhotoUrl = "http://localhost:5000/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }



  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrlSystem+'/countrycode');
  }

  addCountry(val:any){
    return this.http.post(this.APIUrlSystem+'/countrycode',val);
  }

  updateCountry(val:any){
    return this.http.put(this.APIUrlSystem+'/countrycode',val);
  }

  deleteCountry(val:any){
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json',}),body: val};
    return this.http.delete(this.APIUrlSystem+'/countrycode', options);
  }


  
  getLanguageList():Observable<any[]>{
    return this.http.get<any>(this.APIUrlSystem+'/languagecode');
  }

  addLanguage(val:any){
    return this.http.post(this.APIUrlSystem+'/languagecode',val);
  }

  updateLanguage(val:any){
    return this.http.put(this.APIUrlSystem+'/languagecode',val);
  }

  deleteLanguage(val:any){
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json',}),body: val};
    return this.http.delete(this.APIUrlSystem+'/languagecode', options);
  }


  
  getCompanyprofileList():Observable<any[]>{
    return this.http.get<any>(this.APIUrlCompany+'/profile');
  }

  addCompanyprofile(val:any){
    return this.http.post(this.APIUrlCompany+'/profile',val);
  }

  updateCompanyprofile(val:any){
    return this.http.put(this.APIUrlCompany+'/profile',val);
  }

  deleteCompanyprofile(val:any){
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json',}),body: val};
    return this.http.delete(this.APIUrlCompany+'/profile', options);
  }

}
