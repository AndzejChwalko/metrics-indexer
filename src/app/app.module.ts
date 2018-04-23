import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Routing */
import { AppRoutingModule } from './app-routes.module'

/* Forms */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* ng-select */
import { NgSelectModule } from '@ng-select/ng-select';

/* mydatepicker */
import { MyDatePickerModule } from 'mydatepicker';

/* Own components */
import { AppComponent } from './app.component';
import { BirthComponent } from './catholic/birth/birth.component';
import { MarriageComponent } from './catholic/marriage/marriage.component';
import { DeathComponent } from './catholic/death/death.component';
import { HomeComponent } from './home/home.component';
import { TextInputComponent } from './forms/text-input/text-input.component';


@NgModule({
  declarations: [
    AppComponent,
    BirthComponent,
    MarriageComponent,
    DeathComponent,
    HomeComponent,
    TextInputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
