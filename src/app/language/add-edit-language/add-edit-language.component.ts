import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-language',
  templateUrl: './add-edit-language.component.html',
  styleUrls: ['./add-edit-language.component.css']
})
export class AddEditLanguageComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() language:any;
  LanguageID:string;
  Name:string;
  NativeName:string;

  ngOnInit(): void {
    this.LanguageID=this.language.LanguageID;
    this.Name=this.language.Name;
    this.NativeName=this.language.NativeName;
  }

  addLanguage(){
    var val = [{LanguageID:this.LanguageID,
                Name:this.Name,
                NativeName:this.NativeName,
              }];
    this.service.addLanguage(val).subscribe();
  }

  updateLanguage(){
    var val = [{LanguageID:this.LanguageID,
      Name:this.Name,
      NativeName:this.NativeName}];
    this.service.updateLanguage(val).subscribe();
  }


}
