import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureFormComponent } from './components/temperature-form/temperature-form.component';
import { PreIncubationFormComponent } from './components/pre-incubation-form/pre-incubation-form.component';
import { TwoStepAmplificationFormComponent } from './components/two-step-amplification-form/two-step-amplification-form.component';
import { ThreeStepAmplificationFormComponent } from './components/three-step-amplification-form/three-step-amplification-form.component';
import { MeltFormComponent } from './components/melt-form/melt-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureFormComponent,
    PreIncubationFormComponent,
    TwoStepAmplificationFormComponent,
    ThreeStepAmplificationFormComponent,
    MeltFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
