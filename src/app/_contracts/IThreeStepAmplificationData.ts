import { IWellData } from './IWellData';

export interface IThreeStepAmplificationData {
    numberOfCycle: number;
    imageAcquisition: boolean;
    isMultiplex: boolean;
    order: number;
    wellsThreeStepAmplification: Array<IWellData>;
}