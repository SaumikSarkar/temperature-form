import * as contracts from '../_contracts';
import * as models from '../_models';

export class TemperatureData implements contracts.ITemperatureData {
    
    profileName: string;
    testTypeId: number;
    positiveDeviation: number;
    negativeDeviation: number;
    rampRate: number;
    preIncubation: contracts.IPreIncubationData[];
    twoStepAmplification: contracts.ITwoStepAmplificationData[];
    threeStepAmplification: contracts.IThreeStepAmplificationData[];
    melt: contracts.IMeltData[];
     
    constructor(data? : contracts.ITemperatureData) {
        this.profileName = data ? data.profileName : null;
        this.testTypeId = data ? data.testTypeId : null;
        this.positiveDeviation = data ? data.positiveDeviation : null;
        this.negativeDeviation = data ? data.negativeDeviation : null;
        this.rampRate = data ? data.rampRate : null;
        this.preIncubation = data ? data.preIncubation : new Array<models.PreIncubationData>();
        this.twoStepAmplification = data ? data.twoStepAmplification : new Array<models.TwoStepAmplificationData>();
        this.threeStepAmplification = data ? data.threeStepAmplification : new Array<models.ThreeStepAmplificationData>();
        this.melt = data ? data.melt : new Array<models.MeltData>();
    }
}