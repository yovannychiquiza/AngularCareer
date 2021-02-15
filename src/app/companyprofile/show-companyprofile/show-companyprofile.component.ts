import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-companyprofile',
  templateUrl: './show-companyprofile.component.html',
  styleUrls: ['./show-companyprofile.component.css']
})
export class ShowCompanyprofileComponent implements OnInit {

  constructor(private service:SharedService) { }

  CompanyprofileList:any=[];

  ModalTitle:string;
  ActivateAddEditCompanyprofileComp:boolean=false;
  companyprofile:any;

  IdFilter:string="";
  CompanyWebsiteFilter:string="";
  CompanyprofileListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCompanyprofileList();
  }

  addClick(){
    this.companyprofile={
      Id:0,
      CompanyWebsite:""
    }
    this.ModalTitle="Add Companyprofile";
    this.ActivateAddEditCompanyprofileComp=true;

  }

  editClick(item){
    this.companyprofile=item;
    this.ModalTitle="Edit Companyprofile";
    this.ActivateAddEditCompanyprofileComp=true;
  }

  deleteClick(item){
    var val = [{Id:item.Id,
      CompanyWebsite:item.CompanyWebsite}];
    if(confirm('Are you sure??')){
      this.service.deleteCompanyprofile(val).subscribe(data=>{
        this.refreshCompanyprofileList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCompanyprofileComp=false;
    this.refreshCompanyprofileList();
  }


  refreshCompanyprofileList(){
    this.service.getCompanyprofileList().subscribe(data=>{
      this.CompanyprofileList=data;
      this.CompanyprofileListWithoutFilter=data;
    });
  }

  FilterFn(){
    var IdFilter = this.IdFilter;
    var CompanyWebsiteFilter = this.CompanyWebsiteFilter;

    this.CompanyprofileList = this.CompanyprofileListWithoutFilter.filter(function (el){
        return el.Id.toString().toLowerCase().includes(
          IdFilter.toString().trim().toLowerCase()
        )&&
        el.CompanyWebsite.toString().toLowerCase().includes(
          CompanyWebsiteFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.CompanyprofileList = this.CompanyprofileListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
