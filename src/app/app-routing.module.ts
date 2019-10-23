import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemperatureFormComponent } from './components/temperature-form/temperature-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'temperature', pathMatch: 'full' },
  { path: 'temperature', component: TemperatureFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }