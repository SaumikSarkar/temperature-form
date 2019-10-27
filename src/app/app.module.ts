import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureFormComponent } from './components/temperature-form/temperature-form.component';
import { PreIncubationFormComponent } from './components/pre-incubation-form/pre-incubation-form.component';
import { MeltFormComponent } from './components/melt-form/melt-form.component';
import { StepAmplificationFormComponent } from './components/step-amplification-form/step-amplification-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureFormComponent,
    PreIncubationFormComponent,
    MeltFormComponent,
    StepAmplificationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
