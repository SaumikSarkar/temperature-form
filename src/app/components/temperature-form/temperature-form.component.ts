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
    console.log(this.temperatureFormData);
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

  setTestTypes() : Array<IDropdownValues> {
    let values : Array<IDropdownValues> = [
      { value: 'Test Type 1', id: 1 },
      { value: 'Test Type 2', id: 2 },
      { value: 'Test Type 3', id: 3 },
      { value: 'Test Type 4', id: 4 }
    ];
    return values;
  }

}