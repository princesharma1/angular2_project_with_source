import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';

import { headerComponent } from './common/header.component';
import { footerComponent } from './common/footer.component';
import { navComponent } from './common/nav.component';
import { aboutComponent } from './pages/about.component';
import { testComponent } from './pages/test.component';
const appRoutes: Routes = [ 
   { path: 'about', component: aboutComponent }, 
   { path: 'test', component: testComponent }, 
];
@NgModule({
  declarations: [
    AppComponent,headerComponent,footerComponent,aboutComponent,testComponent,navComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'project2'}),RouterModule.forRoot(appRoutes),
     FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
