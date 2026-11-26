import * as THREE from 'three';
import { World } from '../world/World';
/**
 * Trung Tâm Đăng Ký & Showroom Xe Nam Cảng at (80, -240):
 * Allows legal purchase & ownership registration ONLY when wantedStars === 0,
 * graded from cheapest Bicycle -> Motorbike -> Sedan -> Supercar (no tanks/military).
 */
export declare class VehicleShowroom {
    private world;
    root: THREE.Group;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private disposables;
    constructor(world: World);
    private trackGeo;
    private createSignMat;
    private buildShowroomBuilding;
    static isRestrictedFromRegistration(kind: string): boolean;
    static getRegistrationFee(kind: string): number;
    openShowroomModal(): void;
    update(): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
