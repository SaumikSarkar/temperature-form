import * as contracts from '../_contracts';

export class DetailFormData implements contracts.IDetailFormData {
    
    formCount: number;
    formSelected: boolean;

    constructor(data? : contracts.IDetailFormData) {
        this.formCount = data ? data.formCount : 0;
        this.formSelected = data ? data.formSelected : false;
    }
}