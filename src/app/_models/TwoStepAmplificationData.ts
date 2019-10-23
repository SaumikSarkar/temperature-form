import * as contracts from '../_contracts';
import * as models from '../_models';

export class TwoStepAmplificationData implements contracts.ITwoStepAmplificationData {
    
    numberOfCycle: number;
    imageAcquisition: boolean;
    isMultiplex: boolean;
    order: number;
    wellsTwoStepAmplification: contracts.IWellData[];
      
    constructor(data? : contracts.ITwoStepAmplificationData) {
        this.numberOfCycle = data ? data.numberOfCycle : null;
        this.imageAcquisition = data ? data.imageAcquisition : null;
        this.isMultiplex = data ? data.isMultiplex : null;
        this.order = data ? data.order : null;
        this.wellsTwoStepAmplification = data ? data.wellsTwoStepAmplification : new Array<models.WellData>();
    }
}