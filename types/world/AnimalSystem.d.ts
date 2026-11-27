import * as THREE from 'three';
import { World } from './World';
export declare type AnimalSpecies = 'dog' | 'cat' | 'chicken' | 'cow' | 'goat' | 'deer' | 'wolf' | 'tiger' | 'bird';
/**
 * Zoned 15 km2 Wildlife & Domestic Animal System:
 * - City / Park streets (sparse): dogs & cats
 * - Rural Villages / Farms: chickens, cows & goats
 * - Vong Canh Mountain & Forests: wild goats/deer (flee) + rare wolves & tigers (territorial & huntable)
 * - Overhead Park / Coastal / Mountain skies: gliding birds
 * Strictly forbids spawning on Ring Highway, Airport Runway, Wireless Island, Ocean/Lakes/Canal Water, or Interiors.
 */
export declare class AnimalSystem {
    private world;
    private agents;
    private sharedGeos;
    private sharedMats;
    private rayStart;
    private rayEnd;
    private rayRes;
    private readonly MAX_DIST;
    private networkSyncedMode;
    constructor(world: World);
    private initAssets;
    private buildAnimalVisual;
    private spawnInitialPopulation;
    private isForbiddenAnimalPoint;
    private placeNearAnchor;
    private isObstacleAhead;
    private applyDamageToAnimal;
    handlePlayerRayHit(rayOrigin: THREE.Vector3, rayDir: THREE.Vector3, maxDist: number, damage: number): {
        hit: boolean;
        hitPoint?: THREE.Vector3;
    };
    handlePlayerMeleeHit(origin: THREE.Vector3, fwd: THREE.Vector3, range: number, damage: number): void;
    setClientSyncDisabled(disabled: boolean): void;
    update(timeStep: number): void;
    reset(): void;
    dispose(): void;
}
