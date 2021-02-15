import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-language',
  templateUrl: './show-language.component.html',
  styleUrls: ['./show-language.component.css']
})
export class ShowLanguageComponent implements OnInit {

  constructor(private service:SharedService) { }

  LanguageList:any=[];

  ModalTitle:string;
  ActivateAddEditLanguageComp:boolean=false;
  language:any;

  LanguageIDFilter:string="";
  NameFilter:string="";
  LanguageListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshLanguageList();
  }

  addClick(){
    this.language={
      LanguageID:0,
      Name:""
    }
    this.ModalTitle="Add Language";
    this.ActivateAddEditLanguageComp=true;

  }

  editClick(item){
    this.language=item;
    this.ModalTitle="Edit Language";
    this.ActivateAddEditLanguageComp=true;
  }

  deleteClick(item){
    var val = [{LanguageID:item.LanguageID,
      Name:item.Name}];
    if(confirm('Are you sure??')){
      this.service.deleteLanguage(val).subscribe(data=>{
        this.refreshLanguageList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditLanguageComp=false;
    this.refreshLanguageList();
  }


  refreshLanguageList(){
    this.service.getLanguageList().subscribe(data=>{
      this.LanguageList=data;
      this.LanguageListWithoutFilter=data;
    });
  }

  FilterFn(){
    var LanguageIDFilter = this.LanguageIDFilter;
    var NameFilter = this.NameFilter;

    this.LanguageList = this.LanguageListWithoutFilter.filter(function (el){
        return el.LanguageID.toString().toLowerCase().includes(
          LanguageIDFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.LanguageList = this.LanguageListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
