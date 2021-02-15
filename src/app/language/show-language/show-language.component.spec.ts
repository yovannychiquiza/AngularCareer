import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLanguageComponent } from './show-language.component';

describe('ShowLanguageComponent', () => {
  let component: ShowLanguageComponent;
  let fixture: ComponentFixture<ShowLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
