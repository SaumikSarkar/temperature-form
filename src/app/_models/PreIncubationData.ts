import * as contracts from '../_contracts';

export class PreIncubationData implements contracts.IPreIncubationData {
    
    temperature: number;
    holdTimeSecond: number;
    order: number;
    
    constructor(data? : contracts.IPreIncubationData) {
        this.temperature = data ? data.temperature : null;
        this.holdTimeSecond = data ? data.holdTimeSecond : null;
        this.order = data ? data.order : null;
    }
}