import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgFor} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TextBoxModule} from "@syncfusion/ej2-angular-inputs";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    NgFor,
    FormsModule,
    TextBoxModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
