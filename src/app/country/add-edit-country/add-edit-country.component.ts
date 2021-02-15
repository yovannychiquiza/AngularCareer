import { Component,  OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() country:any;
  Code:string;
  Name:string;

  ngOnInit(): void {
    this.Code=this.country.Code;
    this.Name=this.country.Name;
  }

  addCountry(){
    var val = [{Code:this.Code,
                Name:this.Name}];
    this.service.addCountry(val).subscribe();
  }

  updateCountry(){
    var val = [{Code:this.Code,
      Name:this.Name}];
    this.service.updateCountry(val).subscribe();
  }

}
