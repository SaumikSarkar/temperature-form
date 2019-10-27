import { Component, OnInit, Input } from '@angular/core';
import * as models from '../../_models'

@Component({
  selector: 'app-melt-form',
  templateUrl: './melt-form.component.html',
  styleUrls: ['./melt-form.component.scss']
})
export class MeltFormComponent implements OnInit {

  //********** Variables *********/

  @Input('form-data') formData: models.MeltData;

  //**************************** */

  constructor() { }

  ngOnInit() {
  }

}
