import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegesterComponent } from './newProject9/Lujain/regester/regester.component';
import { NavBarComponent } from './newProject9/nav-bar/nav-bar.component';
import { FooterComponent } from './newProject9/footer/footer.component';
import { HomeComponent } from './newProject9/AOQ/home/home.component';
import { RouterModule } from '@angular/router';
import { AnimalCategoryComponent } from './newProject9/Rania/animal-category/animal-category.component';


@NgModule({
  declarations: [
    AppComponent,
    RegesterComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AnimalCategoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
