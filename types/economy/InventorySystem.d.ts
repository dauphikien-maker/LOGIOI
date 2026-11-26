import { World } from '../world/World';
export declare type BagTierId = 'pocket' | 'small_bag' | 'medium_backpack' | 'heist_duffel';
export declare type InventoryItemId = 'banh_mi' | 'pho_box' | 'water_bottle' | 'energy_drink' | 'medkit' | 'boost_serum' | 'jerrycan' | 'diamond' | 'artifact' | 'merch_fruit' | 'merch_fish' | 'merch_seafood' | 'merch_elec';
export interface BagTierSpec {
    id: BagTierId;
    name: string;
    maxSlots: number;
    maxWeightKg: number;
    price: number;
    desc: string;
}
export interface InventoryItemSpec {
    id: InventoryItemId;
    icon: string;
    name: string;
    category: 'food' | 'medical' | 'fuel' | 'loot' | 'trade';
    weightKg: number;
    price: number;
    sellPrice?: number;
    desc: string;
    hungerRestore?: number;
    hpRestore?: number;
    staminaRestore?: number;
    boostSeconds?: number;
}
export declare const BAG_CATALOG: BagTierSpec[];
export declare const FLASHLIGHT_PRICE = 180000;
export declare const INVENTORY_ITEMS: Record<InventoryItemId, InventoryItemSpec>;
export interface StoredInventoryData {
    bagTier: BagTierId;
    hasFlashlight: boolean;
    items: Partial<Record<InventoryItemId, number>>;
    stashItems?: Partial<Record<InventoryItemId, number>>;
}
/**
 * Bag capacity limits, Consumables & Night Flashlight system (Đợt 2/5).
 * Single SpotLight reused on demand so night frame-rate stays near 60 FPS.
 */
export declare class InventorySystem {
    private world;
    bagTier: BagTierId;
    hasFlashlight: boolean;
    flashlightOn: boolean;
    items: Partial<Record<InventoryItemId, number>>;
    stashItems: Partial<Record<InventoryItemId, number>>;
    private spotLight;
    private spotTarget;
    constructor(world: World);
    exportState(): StoredInventoryData;
    applySavedState(data?: StoredInventoryData | null): void;
    getItemQty(id: InventoryItemId): number;
    consumeItem(id: InventoryItemId, qty?: number): boolean;
    getBagSpec(): BagTierSpec;
    getUsedSlots(): number;
    getUsedWeightKg(): number;
    canAddItem(id: InventoryItemId, qty?: number): {
        ok: boolean;
        reason?: string;
    };
    addItem(id: InventoryItemId, qty?: number): boolean;
    toggleFlashlight(): boolean;
    update(): void;
    useItem(id: InventoryItemId): boolean;
    private consumeOne;
    openInventoryModal(): void;
    openItemFoodStoreModal(shopTitle?: string): void;
    openBlackMarketModal(): void;
    openSafeHouseStashModal(houseName: string, onBack?: () => void): void;
    dispose(): void;
}
