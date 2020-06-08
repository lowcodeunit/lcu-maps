import { OnInit, EventEmitter } from '@angular/core';
import { LcuModel } from '../../models/lcu.model';
export declare class LcuComponent implements OnInit {
    card: LcuModel;
    cardSelected: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    SelectCard(url?: string): void;
}
