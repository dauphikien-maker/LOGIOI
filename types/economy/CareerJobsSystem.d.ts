import * as THREE from 'three';
import { World } from '../world/World';
import { Vehicle } from '../vehicles/Vehicle';
import { InventoryItemId } from './InventorySystem';
export declare type CareerKind = 'shipper' | 'taxi' | 'cargo';
export interface ActiveCareerShift {
    kind: CareerKind;
    title: string;
    stage: 'pickup' | 'deliver';
    pickupName: string;
    pickupX: number;
    pickupZ: number;
    destName: string;
    destX: number;
    destZ: number;
    basePay: number;
    bonusPay: number;
    bonusTimer: number;
    integrity: number;
    distanceKm: number;
}
/**
 * 4 Honest Careers + Dynamic Merchant Pricing + "Gara Sửa Xe Chú Tư" (Đợt 4/5):
 * 1. Shipper (Bike / Motorbike fast delivery w/ speed bonus)
 * 2. Lái Taxi (3D roadside passenger pickup -> metered GPS trip)
 * 3. Chở Hàng (Cargo van/truck hauling w/ collision integrity tracking)
 * 4. Buôn Bán (Buy village/port goods, store in Bag or Vehicle Trunk, sell high at peak hours)
 * + Gara Chú Tư Repair Bays fixing vehicle durability & refilling fuel.
 */
export declare class CareerJobsSystem {
    private world;
    root: THREE.Group;
    active: ActiveCareerShift | null;
    trunkItems: Partial<Record<InventoryItemId, number>>;
    private readonly TRUNK_MAX_SLOTS;
    private readonly TRUNK_MAX_KG;
    private passengerMesh;
    private hudEl;
    private hudCollapsed;
    private lastHudHtml;
    private shiftVehicle;
    private disposables;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    constructor(world: World);
    private trackGeo;
    private createHUD;
    private createSignMat;
    private addStaticBox;
    private buildHubsAndChuTuGarages;
    handleMarkerAction(tag: string): boolean;
    openChuTuRepairModal(): void;
    private ensureShiftAllowed;
    openCareerStartModal(kind: CareerKind): void;
    private spawnShiftVehicleForCareer;
    startCareerShift(kind: CareerKind): boolean;
    private spawnWaitingPassenger;
    cancelCareerShift(): void;
    notifyVehicleShock(veh: Vehicle, shockDelta: number): void;
    getHourlySellPrice(id: InventoryItemId, district: 'downtown' | 'luxury'): {
        price: number;
        trendTag: string;
    };
    private getTrunkUsedSlots;
    private getTrunkUsedKg;
    openMerchantMarketModal(mode: 'buy_village' | 'buy_port' | 'sell_downtown' | 'sell_luxury'): void;
    update(timeStep: number): void;
    private renderHUD;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
