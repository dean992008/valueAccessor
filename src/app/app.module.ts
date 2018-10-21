import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { YesNoInputComponent } from './yes-no-input/yes-no-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    YesNoInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
