import * as contracts from '../_contracts';
import * as models from '../_models';

export class FormSelectionData implements contracts.IFormSelectionData {
    
    preIncubation: contracts.IDetailFormData;
    twoStepAmplification: contracts.IDetailFormData;
    threeStepAmplification: contracts.IDetailFormData;
    melt: contracts.IDetailFormData;

    constructor(data? : contracts.IFormSelectionData) {
        this.preIncubation = data ? data.preIncubation : new models.DetailFormData();
        this.twoStepAmplification = data ? data.twoStepAmplification : new models.DetailFormData();
        this.threeStepAmplification = data ? data.threeStepAmplification : new models.DetailFormData();
        this.melt = data ? data.melt : new models.DetailFormData();
    }
}