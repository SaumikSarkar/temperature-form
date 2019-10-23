import * as contracts from '../_contracts';

export class WellData implements contracts.IWellData {
    
    setPoint1: number;
    setPoint2: number;
    setPoint3?: number;
    holdTime1: number;
    holdTime2: number;
    holdTime3?: number;
    wellsNo: number;
    
    constructor(data? : contracts.IWellData) {
        this.setPoint1 = data ? data.setPoint1 : null;
        this.setPoint2 = data ? data.setPoint2 : null;
        this.setPoint3 = data ? data.setPoint3 : null;
        this.holdTime1 = data ? data.holdTime1 : null;
        this.holdTime2 = data ? data.holdTime2 : null;
        this.holdTime3 = data ? data.holdTime3 : null;
        this.wellsNo = data ? data.wellsNo : null;
    }
}