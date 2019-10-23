import * as contracts from '../_contracts';
import * as models from '../_models';

export class ThreeStepAmplificationData implements contracts.IThreeStepAmplificationData {
    
    numberOfCycle: number;
    imageAcquisition: boolean;
    isMultiplex: boolean;
    order: number;
    wellsThreeStepAmplification: contracts.IWellData[];
      
    constructor(data? : contracts.IThreeStepAmplificationData) {
        this.numberOfCycle = data ? data.numberOfCycle : null;
        this.imageAcquisition = data ? data.imageAcquisition : null;
        this.isMultiplex = data ? data.isMultiplex : null;
        this.order = data ? data.order : null;
        this.wellsThreeStepAmplification = data ? data.wellsThreeStepAmplification : new Array<models.WellData>();
    }
}