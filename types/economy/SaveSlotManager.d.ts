import { World } from '../world/World';
import { RegisteredVehicleRecord } from '../world/map/LocationInteractionSystem';
import { StoredInventoryData } from './InventorySystem';
import { OutfitStyleId, CapStyleId } from '../characters/ProceduralAvatarBuilder';
export interface SingleplayerSaveData {
    version: number;
    slotIndex: 1 | 2 | 3;
    mapName: string;
    updatedAt: string;
    cash: number;
    bankBalance: number;
    bankTransactions: Array<{
        time: string;
        desc: string;
        amount: number;
    }>;
    playerPos: {
        x: number;
        y: number;
        z: number;
        yaw: number;
    };
    playerGender: 'male' | 'female';
    appearance: {
        currentOutfit: OutfitStyleId;
        ownedOutfits: OutfitStyleId[];
        hairColorHex: number;
        showGlasses: boolean;
        capStyle: CapStyleId;
        capColorHex: number;
        shirtColorHex: number;
        pantsColorHex: number;
        shoesColorHex: number;
    };
    stats: {
        health: number;
        armor: number;
        hunger: number;
    };
    weapons: {
        ownedWeapons: number[];
        ammoInMag: Record<number, number>;
        reserveAmmo: Record<number, number>;
    };
    inventory: StoredInventoryData;
    registeredVehicles: RegisteredVehicleRecord[];
    taxiPhones: string[];
    law: {
        wantedStars: number;
        inJail: boolean;
        jailTimer: number;
        jailedStars: number;
    };
    missions: {
        completedMissions: number[];
        completedJobs: number;
    };
    safeHouses: {
        ownedIds: string[];
        activeSpawnId: string | null;
    };
    worldTimeMinutes: number;
}
/**
 * 3-Slot Singleplayer World Manager + Direct-to-Device File Saver (`.logioi.json`):
 * - Uses File System Access API (`window.showSaveFilePicker`) on PC Chrome/Edge so player chooses folder once
 *   and subsequent saves write straight to the same file on disk.
 * - Falls back cleanly on Mobile (iOS/Android) & Firefox by downloading `TenMap.logioi.json` + localStorage cache.
 * - Supports importing any `.logioi.json` save file from disk into Slot 1, 2, or 3.
 */
export declare class SaveSlotManager {
    private world;
    activeSlot: 1 | 2 | 3;
    activeMapName: string;
    private fileHandles;
    constructor(world: World);
    private sanitizeFileName;
    getSlotSummary(slot: 1 | 2 | 3): SingleplayerSaveData | null;
    deleteSlot(slot: 1 | 2 | 3): void;
    buildFreshSlotData(slot: 1 | 2 | 3, mapName: string): SingleplayerSaveData;
    collectLiveSnapshot(slot?: 1 | 2 | 3, mapName?: string): SingleplayerSaveData;
    cacheSlotLocally(data: SingleplayerSaveData): void;
    getMostRecentSlot(): 1 | 2 | 3 | null;
    loadOrStartLatestWorld(): boolean;
    createNewWorldInSlot(slot: 1 | 2 | 3, mapName: string): Promise<boolean>;
    exportCurrentWorldData(mapName?: string): SingleplayerSaveData;
    saveActiveWorld(explicitFileSave: boolean): Promise<{
        savedToFile: boolean;
        method: 'fs_api' | 'download' | 'cache';
    }>;
    private saveToDiskFile;
    importFromJsonString(slot: 1 | 2 | 3, jsonStr: string): SingleplayerSaveData | null;
    loadSlotAndEnterWorld(slot: 1 | 2 | 3): boolean;
    applyDataToWorld(data: SingleplayerSaveData): void;
}
