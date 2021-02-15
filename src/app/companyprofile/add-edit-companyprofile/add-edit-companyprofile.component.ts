import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-companyprofile',
  templateUrl: './add-edit-companyprofile.component.html',
  styleUrls: ['./add-edit-companyprofile.component.css']
})
export class AddEditCompanyprofileComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() companyprofile:any;
  Id:string;
  CompanyWebsite:string;
  ContactPhone:string;

  ngOnInit(): void {
    this.Id=this.companyprofile.Id;
    this.CompanyWebsite=this.companyprofile.CompanyWebsite;
    this.ContactPhone=this.companyprofile.ContactPhone;
  }

  addCompanyprofile(){
    var val = [{
                CompanyWebsite:this.CompanyWebsite,
                ContactPhone:this.ContactPhone,
              }];
    this.service.addCompanyprofile(val).subscribe();
  }

  updateCompanyprofile(){
    var val = [{Id:this.Id,
      CompanyWebsite:this.CompanyWebsite,
      ContactPhone:this.ContactPhone}];
    this.service.updateCompanyprofile(val).subscribe();
  }


}
