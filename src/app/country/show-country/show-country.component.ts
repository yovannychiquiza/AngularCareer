import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  constructor(private service:SharedService) { }

  CountryList:any=[];

  ModalTitle:string;
  ActivateAddEditCountryComp:boolean=false;
  country:any;

  CodeFilter:string="";
  NameFilter:string="";
  CountryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCountryList();
  }

  addClick(){
    this.country={
      Code:0,
      Name:""
    }
    this.ModalTitle="Add Country";
    this.ActivateAddEditCountryComp=true;

  }

  editClick(item){
    this.country=item;
    this.ModalTitle="Edit Country";
    this.ActivateAddEditCountryComp=true;
  }

  deleteClick(item){
    var val = [{Code:item.Code,
      Name:item.Name}];
    if(confirm('Are you sure??')){
      this.service.deleteCountry(val).subscribe(data=>{
        this.refreshCountryList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCountryComp=false;
    this.refreshCountryList();
  }


  refreshCountryList(){
    this.service.getCountryList().subscribe(data=>{
      this.CountryList=data;
      this.CountryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CodeFilter = this.CodeFilter;
    var NameFilter = this.NameFilter;

    this.CountryList = this.CountryListWithoutFilter.filter(function (el){
        return el.Code.toString().toLowerCase().includes(
          CodeFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.CountryList = this.CountryListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
