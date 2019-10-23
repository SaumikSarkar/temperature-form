import * as contracts from '../_contracts';

export class MeltData implements contracts.IMeltData {
    
    startTemperature: number;
    endTemperature: number;
    order: number;

    constructor(data? : contracts.IMeltData) {
        this.startTemperature = data ? data.startTemperature : null;
        this.endTemperature = data ? data.endTemperature : null;
        this.order = data ? data.order : null;
    }
}