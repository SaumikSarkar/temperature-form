import * as contracts from '../_contracts';

export interface ITemperatureData {
    profileName: string;
    testTypeId: number;
    positiveDeviation: number;
    negativeDeviation: number;
    rampRate: number;
    preIncubation: Array<contracts.IPreIncubationData>;
    twoStepAmplification: Array<contracts.ITwoStepAmplificationData>;
    threeStepAmplification: Array<contracts.IThreeStepAmplificationData>;
    melt: Array<contracts.IMeltData>;
}