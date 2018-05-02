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

/* cuppa-ng2-slidemenu */
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

/* I18n */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/* Own components */
import { AppComponent } from './app.component';
import { BirthComponent } from './catholic/birth/birth.component';
import { MarriageComponent } from './catholic/marriage/marriage.component';
import { DeathComponent } from './catholic/death/death.component';
import { HomeComponent } from './home/home.component';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { HeaderComponent } from './commons/header/header.component';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BirthComponent,
    MarriageComponent,
    DeathComponent,
    HomeComponent,
    TextInputComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MyDatePickerModule,
    SlideMenuModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
