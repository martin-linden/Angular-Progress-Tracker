import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { ChartsComponent } from './components/charts/charts.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ChartsComponent],
  imports: [
    MenubarModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
