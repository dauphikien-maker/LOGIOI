import * as THREE from 'three';
import { World } from '../world/World';
export interface TaxiBillboardEntry {
    id: number;
    phoneFormatted: string;
    digits: string;
    district: string;
    x: number;
    z: number;
    yaw: number;
}
/**
 * Randomized Taxi Billboard Network & Metered AI Dispatch (Đợt 2/5):
 * Places 10 prominent roadside billboards with randomized fictional Taxi phone numbers per session.
 * Dialing any active number on Phone [F] (when wantedStars === 0) dispatches a Taxi Vạn Lợi pickup trip.
 */
export declare class TaxiDispatchSystem {
    private world;
    root: THREE.Group;
    billboards: TaxiBillboardEntry[];
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private disposables;
    private billboardFaceMeshes;
    private fadeEl;
    constructor(world: World);
    private trackGeo;
    private generateBillboards;
    private createBillboardMaterial;
    private buildBillboardMeshes;
    exportBillboards(): string[];
    applySavedBillboards(savedDigits?: string[]): void;
    /**
     * Checks whether user's dialed digits match any active billboard Taxi hotline.
     */
    handleDialedNumber(rawDigits: string): boolean;
    static computeRoadRouteFare(fromX: number, fromZ: number, toX: number, toZ: number): {
        distMeters: number;
        fareVND: number;
    };
    private openTaxiDispatchModal;
    private executeMeteredRide;
    update(): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
