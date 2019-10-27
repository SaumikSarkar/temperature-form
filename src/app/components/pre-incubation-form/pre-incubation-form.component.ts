import { Component, OnInit, Input } from '@angular/core';
import * as models from '../../_models'

@Component({
  selector: 'app-pre-incubation-form',
  templateUrl: './pre-incubation-form.component.html',
  styleUrls: ['./pre-incubation-form.component.scss']
})
export class PreIncubationFormComponent implements OnInit {

  //********** Variables *********/

  @Input('form-data') formData: models.PreIncubationData;

  //**************************** */

  constructor() { }

  ngOnInit() {
  }

}
