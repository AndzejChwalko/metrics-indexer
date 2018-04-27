import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-birth',
  templateUrl: './birth.component.html',
  styleUrls: ['./birth.component.css']
})
export class BirthComponent implements OnInit {

  public datePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    inline: true,
    selectorHeight: '200px',
    selectorWidth: '210px'
  };

  public dayOfBaptism: any = { 
    date: {
      year: 1850,
      month: 1,
      day: 1
    }
  }

  public dayOfBirth: any = { 
    date: {
      year: 1850,
      month: 1,
      day: 1
    }
  }

  placesTypes: String[] = [];
  placesNames: String[] = [];
  churchsTitles: String[] = [];
  churchsPrists: String[] = [];
  
  maleFirstNames: String[] = [];
  femaleFirstNames: String[] = [];
  
  maleMiddleNames: String[] = [];
  femaleMiddleNames: String[] = [];

  maleLastName: String[] = [];
  femaleLastName: String[] = [];

  classOfMale: String[] = [];
  classOfFemale: String[] = [];

  public mainForm: FormGroup; 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.mainForm = this.fb.group({
      entry: this.fb.group({
        gender: ['', Validators.required],
        birth: this.fb.group({
          date: ['', Validators.required]
        }),
        baptism: this.fb.group({
          date: ['', Validators.required]
        }),
        place: this.fb.group({
          type: ['', Validators.required],
          name: ['', Validators.required]
        }),
        child: this.fb.group({
          firstName: ['', Validators.required],
          secondName: [''],
          lastName: ['', Validators.required],
          illegitimate: [false],
          twins: [false]
        },{}),
        daddy: this.fb.group({
          firstName: ['', Validators.required],
          middleName: [''],
          lastName: ['', Validators.required],
          class: ['', Validators.required],
          ext: ['']
        }, {}),
        mommy: this.fb.group({
          firstName: ['', Validators.required],
          middleName: [''],
          lastName: ['', Validators.required],
          class: ['', Validators.required],
          soldierWife: [false],
          widow: [false],
          maiden: [false]
        },{}),
        godfather: this.fb.group({
          firstName: ['', Validators.required],
          middleName: [''],
          lastName: ['', Validators.required],
          class:['', Validators.required],
          ext:['']
        }, {}),
        godmother: this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          husbandName: ['', Validators.required],
          class: ['', Validators.required]
        }, {}),
        church: this.fb.group({
          title: ['', Validators.required],
          prist: ['', Validators.required]
        })
      }, {}),
      cache: this.fb.group({
          pairs: [{}]
      }, {})
    }, {});
  }

}
