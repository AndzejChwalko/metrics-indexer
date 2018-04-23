import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/* Own components import below */
import { HomeComponent } from './home/home.component';

import { BirthComponent } from './catholic/birth/birth.component';
import { MarriageComponent } from './catholic/marriage/marriage.component';
import { DeathComponent } from './catholic/death/death.component';

const routes: Routes = [
	{ path:'', redirectTo:'/home', pathMatch:'full' },
	{ path:'home', component: HomeComponent },

	{ path:'catholic/birth', component: BirthComponent },
	{ path:'catholic/marriage', component: MarriageComponent },
	{ path:'catholic/death', component: DeathComponent },
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}