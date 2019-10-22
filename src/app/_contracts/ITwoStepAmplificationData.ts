import { IWellData } from './IWellData';

export interface ITwoStepAmplificationData {
    numberOfCycle: number;
    imageAcquisition: boolean;
    isMultiplex: boolean;
    order: number;
    wellsTwoStepAmplification: Array<IWellData>;
}