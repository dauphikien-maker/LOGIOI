import * as THREE from 'three';
import { World } from '../world/World';
import { WeaponSlotId } from '../combat/WeaponSystem';
export interface WeaponShopItem {
    slot: WeaponSlotId;
    name: string;
    desc: string;
    unlockPrice: number;
    ammoPackPrice: number;
    ammoPackAmount: number;
    ammoLabel: string;
    isConsumableStack?: boolean;
}
export interface ActiveJobState {
    kind: 'delivery' | 'taxi';
    title: string;
    destName: string;
    destX: number;
    destZ: number;
    reward: number;
    distanceMeters: number;
}
export declare const WEAPON_SHOP_CATALOG: WeaponShopItem[];
export declare const ARMOR_PRICE = 950000;
export declare const MEDKIT_PRICE = 140000;
export declare const BOOST_SERUM_PRICE = 220000;
/**
 * LOGIOI 0-Đ Economy, LocalStorage Persistence, Weapon Shops ("TIỆM VŨ KHÍ LỘ GIỚI"),
 * Armor System, Delivery/Taxi Jobs & 24H Convenience Store Robbery.
 */
export declare class EconomyAndJobs {
    private world;
    root: THREE.Group;
    armor: number;
    completedJobs: number;
    activeJob: ActiveJobState | null;
    private shopRobCooldowns;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private disposables;
    private saveAccum;
    constructor(world: World);
    /**
     * Hydrates cash, bank, armor, unlocked weapons, and ammo from localStorage (defaults to 0 Đ & fists only).
     */
    hydrateFromStorage(): void;
    saveToStorage(): void;
    setArmor(val: number): void;
    /**
     * Absorbs incoming damage through Armor first before affecting HP. Returns remaining damage for HP.
     */
    absorbArmorDamage(dmg: number): number;
    private trackGeo;
    private createSignMat;
    private addStaticBox;
    private addCollider;
    private buildWeaponShops;
    openWeaponShopModal(): void;
    startJob(kind: 'delivery' | 'taxi'): ActiveJobState | null;
    cancelJob(): void;
    robShop24H(shopId: string): void;
    update(timeStep: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
