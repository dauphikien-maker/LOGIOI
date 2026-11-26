import * as CANNON from 'cannon';
import { ICollider } from '../../interfaces/ICollider';
export declare class CapsuleCollider implements ICollider {
    options: any;
    body: CANNON.Body;
    readonly groundContactLocalY: number;
    constructor(options: any);
}
