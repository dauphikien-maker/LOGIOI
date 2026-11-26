import * as THREE from 'three';
import { World } from '../World';
export interface SafeHouseSpec {
    id: string;
    name: string;
    district: string;
    price: number;
    desc: string;
    doorPos: THREE.Vector3;
    spawnPos: THREE.Vector3;
    vehiclePos: THREE.Vector3;
    vehicleYaw: number;
    forSaleBoardMesh?: THREE.Mesh;
}
interface StoredSafeHouseState {
    ownedIds: string[];
    activeSpawnId: string | null;
}
/**
 * Part 4 World Module — 3 Purchasable GTA-5-Style Safe Houses persisted in localStorage:
 * 1. Phòng Trọ Phố Cổ (3.000.000 Đ)
 * 2. Căn Hộ Cao Cấp Downtown (10.000.000 Đ)
 * 3. Biệt Thự Đồi Phú Quý w/ Pool & 3-Car Forecourt (25.000.000 Đ)
 */
export declare class SafeHouseSystem {
    private world;
    root: THREE.Group;
    houses: SafeHouseSpec[];
    private ownedIds;
    activeSpawnId: string | null;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private disposables;
    constructor(world: World);
    private loadFromStorage;
    private saveToStorage;
    exportState(): StoredSafeHouseState;
    applySavedState(data?: Partial<StoredSafeHouseState> | null): void;
    isOwned(id: string): boolean;
    getActiveSpawnPoint(): THREE.Vector3 | null;
    private trackGeo;
    private createForSaleSignMat;
    private addBox;
    private addCollider;
    private buildAllSafeHouses;
    private registerHouseMarker;
    purchaseHouse(id: string): boolean;
    setActiveSpawn(id: string): void;
    handleMarkerInteraction(house: SafeHouseSpec): void;
    update(timeStep: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
export {};
