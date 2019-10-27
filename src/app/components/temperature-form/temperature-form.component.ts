import { Component, OnInit } from '@angular/core';
import * as models from '../../_models';

interface IDetailFormValues {
  value: string;
  id: string;
}

interface IDropdownValues {
  value: string;
  id: number;
}

@Component({
  selector: 'app-temperature-form',
  templateUrl: './temperature-form.component.html',
  styleUrls: ['./temperature-form.component.scss']
})
export class TemperatureFormComponent implements OnInit {

  //************* Variables ***************/

  showTemperaturePanel: boolean;
  testTypes: Array<IDropdownValues>;
  temperatureDetailFormValues: Array<IDetailFormValues>;
  temperatureFormData: models.TemperatureData = new models.TemperatureData();
  formDisplayData: Array<models.FormSelectionData> = new Array<models.FormSelectionData>();
  formDataObject: models.FormSelectionData = new models.FormSelectionData();

  //************************************ */

  constructor() { }

  ngOnInit() {
    this.testTypes = this.setTestTypes();
    this.temperatureDetailFormValues = this.getFormTypeValues();
  }

  addTemperature() {
    this.showTemperaturePanel = !this.showTemperaturePanel;
  }

  selectFormType(formType: string) {
    this.showTemperaturePanel = false;
    let tempFormObject: models.FormSelectionData = new models.FormSelectionData();
    Object.keys(this.formDataObject).forEach((key: string) => {
      if (key == formType) {
        this.formDataObject[key].formSelected = true;
        this.formDataObject[key].formCount++;
        switch (formType) {
          case 'preIncubation':
            let preIncubationData: models.PreIncubationData = new models.PreIncubationData();
            preIncubationData.order = this.formDisplayData.length + 1;
            this.temperatureFormData.preIncubation.push(preIncubationData);
            break;
          case 'twoStepAmplification':
            let twoStepAmplificationData: models.TwoStepAmplificationData = new models.TwoStepAmplificationData();
            twoStepAmplificationData.order = this.formDisplayData.length + 1;
            this.temperatureFormData.twoStepAmplification.push(twoStepAmplificationData);
            break;
          case 'threeStepAmplification':
            let threeStepAmplificationData: models.ThreeStepAmplificationData = new models.ThreeStepAmplificationData();
            threeStepAmplificationData.order = this.formDisplayData.length + 1;
            this.temperatureFormData.threeStepAmplification.push(threeStepAmplificationData);
            break;
          case 'melt':
            let meltData: models.MeltData = new models.MeltData();
            meltData.order = this.formDisplayData.length + 1;
            this.temperatureFormData.melt.push(meltData);
            break;
        }
      }
      else {
        this.formDataObject[key].formSelected = false;
      }
    });
    tempFormObject = JSON.parse(JSON.stringify(this.formDataObject));
    this.formDisplayData.push(tempFormObject);
  }

  getTemperatureFormData() {
    let isValid: boolean = false;
    isValid = this.checkValidation();
    if (isValid) {
      console.log(this.temperatureFormData);
      alert('Please Check Console for Output');
    }
    else {
      alert('The Validations are not met');
    }
  }

  checkValidation(): boolean {
    let validCheck: boolean = true;
    let profileRegex: RegExp = /^[A-Za-z0-9]*$/;
    this.temperatureFormData.melt.forEach((data: models.MeltData) => {
      if (data.endTemperature > 100 || data.startTemperature < 30 || data.startTemperature > 99.99) {
        validCheck = false;
      }
    });
    this.temperatureFormData.preIncubation.forEach((data: models.PreIncubationData) => {
      if (data.holdTimeSecond < 3 || data.holdTimeSecond > 18000 ||
        data.temperature < 30 || data.temperature > 100) {
          validCheck = false;
      }
    });
    this.temperatureFormData.twoStepAmplification.forEach((data: models.TwoStepAmplificationData) => {
      if (data.imageAcquisition == null || data.numberOfCycle < 1 || data.numberOfCycle > 100) {
        validCheck = false;
      }
      data.wellsTwoStepAmplification.forEach((well: models.WellData) => {
        if (well.holdTime1 < 3 || well.holdTime1 > 18000 ||
          well.holdTime2 < 3 || well.holdTime2 > 18000 ||
          well.setPoint1 < 30 || well.setPoint1 > 100 ||
          well.setPoint2 < 30 || well.setPoint2 > 100) {
            validCheck = false;
        }
      });
    });
    this.temperatureFormData.threeStepAmplification.forEach((data: models.ThreeStepAmplificationData) => {
      if (data.imageAcquisition == null || data.numberOfCycle < 1 || data.numberOfCycle > 100) {
        validCheck = false;
      }
      data.wellsThreeStepAmplification.forEach((well: models.WellData) => {
        if (well.holdTime1 < 3 || well.holdTime1 > 18000 ||
          well.holdTime2 < 3 || well.holdTime2 > 18000 ||
          well.holdTime3 < 3 || well.holdTime3 > 18000 ||
          well.setPoint1 < 30 || well.setPoint1 > 100 ||
          well.setPoint2 < 30 || well.setPoint2 > 100 ||
          well.setPoint3 < 30 || well.setPoint3 > 100) {
            validCheck = false;
        }
      });
    });
    if (this.temperatureFormData.negativeDeviation < 0.5 ||
      this.temperatureFormData.negativeDeviation > 100 ||
      this.temperatureFormData.positiveDeviation < 0.5 ||
      this.temperatureFormData.positiveDeviation > 100 ||
      this.temperatureFormData.rampRate < 0.01 ||
      this.temperatureFormData.rampRate > 100 ||
      !this.temperatureFormData.testTypeId||
      (profileRegex.test(this.temperatureFormData.profileName) == false)) {
        validCheck = false;
    }
    return validCheck;
  }

  getFormTypeValues(): Array<IDetailFormValues> {
    let values: Array<IDetailFormValues> = [
      { value: 'Pre-Incubation', id: 'preIncubation' },
      { value: '2-Step Amplification', id: 'twoStepAmplification' },
      { value: '3-Step Amplification', id: 'threeStepAmplification' },
      { value: 'Melt', id: 'melt' }
    ];
    return values;
  }

  setTestTypes(): Array<IDropdownValues> {
    let values: Array<IDropdownValues> = [
      { value: 'Test Type 1', id: 1 },
      { value: 'Test Type 2', id: 2 },
      { value: 'Test Type 3', id: 3 },
      { value: 'Test Type 4', id: 4 }
    ];
    return values;
  }

}