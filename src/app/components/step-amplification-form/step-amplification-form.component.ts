import { Component, OnInit, Input } from '@angular/core';
import * as models from '../../_models';

@Component({
  selector: 'app-step-amplification-form',
  templateUrl: './step-amplification-form.component.html',
  styleUrls: ['./step-amplification-form.component.scss']
})
export class StepAmplificationFormComponent implements OnInit {

  //************ Variables **************/

  @Input('step-count') step: number;
  @Input('form-data') formData: any;

  isShowMultipleValue: number = 1;

  //*********************************** */

  constructor() { }

  ngOnInit() {
    this.initializeWellData();
  }

  initializeWellData() {
    let well: models.WellData = new models.WellData();
    well.wellsNo = 0;
    if (this.step == 2) {
      delete well['setPoint3'];
      delete well['holdTime3'];
      this.formData.wellsTwoStepAmplification.push(well);
    }
    else if (this.step == 3) {
      this.formData.wellsThreeStepAmplification.push(well);
    }
  }

  showMultiple(event: any) {
    this.isShowMultipleValue = event.target.checked ? 6 : 1;
    this.formData.isMultiplex = event.target.checked;
    let wellData: Array<models.WellData> = [];
    for (let i = 0; i < this.isShowMultipleValue; i++) {
      let well: models.WellData = new models.WellData();
      well.wellsNo = i;
      if (this.step == 2) {
        delete well['setPoint3'];
        delete well['holdTime3'];
      }
      wellData.push(well);
    }
    if (this.step == 2) {
      this.formData.wellsTwoStepAmplification = [];
      this.formData.wellsTwoStepAmplification = wellData;
    }
    else if (this.step == 3) {
      this.formData.wellsThreeStepAmplification = [];
      this.formData.wellsThreeStepAmplification = wellData;
    }
  }

  imgAcqCheck(value: boolean) {
    this.formData.imageAcquisition = value;
  }

  getNumber(value: string): string {
    return (Number(value) + 1).toString();
  }

}