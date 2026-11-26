import * as THREE from 'three';
import { World } from '../World';
import { InteractionMarker } from './LandmarksAndSecrets';
export declare type InteriorKind = 'bar' | 'casino' | 'bank' | 'museum' | 'jewelry' | 'weapon_shop' | 'fashion' | 'item_store';
/**
 * Isolated 3D Interior Spaces (`InteriorManager.ts`):
 * - Builds Casino Hoàng Gia (-240, 80) & Bảo Tàng Lịch Sử (-240, -240) exteriors + interior rooms for:
 *   Bar, Casino, Bank, Museum, Weapon & Medical Shop, Clothing Studio, Item & Food Mart (24H).
 * - Rooms sit in isolated sky pockets (`y = 260`, visibility toggled off when outdoors)
 *   preserving full 60 FPS across Nam Cang while providing complete interior gameplay on [E].
 */
export declare class InteriorManager {
    private world;
    private exteriorRoot;
    private interiorRoot;
    private interiorLight;
    private interiorFill;
    private fadeEl;
    private rooms;
    private activeKind;
    private activeBodies;
    private activeServiceMarkers;
    private returnPoint;
    private transitionLock;
    private exteriorColliders;
    private lastStreamX;
    private lastStreamZ;
    private disposables;
    private bankTellerArms;
    private bankCashStacks;
    private bankCoercedActive;
    private bankCoerceTimer;
    private bankCashSpawnCount;
    private bankCooldownUntil;
    private vaultCooldownUntil;
    private jewelryCooldownUntil;
    private jewelryCasesRemaining;
    private museumCooldownUntil;
    private heistProgressEl;
    private activeHeistProgress;
    private securityGuards;
    private guardTracers;
    private guardTracerMat;
    constructor(world: World);
    private trackGeo;
    isInsideInterior(): boolean;
    private createSignMat;
    private addExteriorBox;
    /**
     * Builds standalone exterior landmarks for Casino Hoàng Gia (-240, 80) and Bảo Tàng Nam Cảng (-240, -240).
     */
    private buildExtraExteriorVenues;
    /**
     * Converts outdoor Bank / Bar / Fashion / WeaponShop / 24H door markers into glowing [E] Vào bên trong transitions.
     */
    private convertOutdoorMarkersToEntrances;
    private buildAllInteriorRooms;
    private populateRoomMeshAndServices;
    /**
     * Teleports player into an isolated 3D interior room with fade screen transition.
     */
    enterInterior(kind: InteriorKind, sourceMarker?: InteractionMarker): void;
    exitInterior(): void;
    handleServiceAction(tag: string, marker: InteractionMarker): boolean;
    private getFormattedClock;
    private removeDynamicMarker;
    private startHeistProgress;
    private cancelHeistProgress;
    private renderHeistProgressUI;
    private triggerVaultHeist;
    private triggerJewelryHeist;
    private triggerMuseumHeist;
    private spawnNextBankCounterCash;
    private clearActiveInteriorPhysicsAndMarkers;
    update(): void;
    private triggerGuardsAlert;
    private updateSecurityGuards;
    handlePlayerRayHit(rayOrigin: THREE.Vector3, rayDir: THREE.Vector3, maxDist: number, damage: number): {
        hit: boolean;
        hitPoint?: THREE.Vector3;
    };
    handlePlayerMeleeHit(origin: THREE.Vector3, fwd: THREE.Vector3, range: number, damage: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
