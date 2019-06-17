import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
