import { Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuManagementState } from './lcu-management.state';
export declare class LcuManagementStateContext extends StateContext<LcuManagementState> {
    protected injector: Injector;
    constructor(injector: Injector);
    GetLcuById(id: number): void;
    protected defaultValue(): LcuManagementState;
    protected loadStateKey(): string;
    protected loadStateName(): string;
}
