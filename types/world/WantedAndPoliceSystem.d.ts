import * as THREE from 'three';
import { World } from './World';
export interface SurrenderZonePoint {
    x: number;
    z: number;
    label: string;
}
/**
 * GTA-5-Style Wanted Level (1-5 Stars), NCPD Pursuit, K-98 Military Army (5â˜…),
 * Surrender ([X]), Real-Time Dam Dong Prison Sentence (1-5 min + Bail), & Death Money Penalty.
 */
export declare class WantedAndPoliceSystem {
    private world;
    wantedStars: number;
    wantedZoneCenter: {
        x: number;
        z: number;
    };
    private lastSeenPos;
    private hasLastSeen;
    private crimeHeat;
    private evadeTimer;
    private isEvading;
    private isSpottedLOS;
    private flashPhase;
    private timeSincePlayerAttack;
    private policeKillsAtHighHeat;
    private k98InsideTimer;
    private roadblockSpawnedForStars;
    private spawnGraceTimer;
    private starUpgradeCooldown;
    private waypointRefreshTimer;
    private initialWaveDispatched;
    private surrenderZonesGroup;
    private surrenderSpots;
    private surrenderConfirmOpen;
    private surrenderTimer;
    private isArrestedState;
    private jailTimer;
    private jailedStars;
    private lastRenderedJailSec;
    inJail: boolean;
    private vehicles;
    private officers;
    private tracers;
    private nextUnitId;
    private spawnCooldown;
    private sharedGeos;
    private sharedMats;
    private tracerMat;
    private k98TracerMat;
    private playerArmL;
    private playerArmR;
    private playerBoneOwner;
    private starsHudEl;
    private surrenderPromptEl;
    private bustedBannerEl;
    private jailHudEl;
    private hudAccum;
    private visCheckAccum;
    private losCheckAccum;
    private networkSyncedMode;
    private static tmpVisPos;
    private static rayStart;
    private static rayEnd;
    private static rayRes;
    private readonly K98_BOUNDS;
    private readonly PRISON_YARD_BOUNDS;
    constructor(world: World);
    private createSurrenderZonesVisuals;
    getSurrenderSpots(): ReadonlyArray<SurrenderZonePoint>;
    getWantedZoneRadius(): number;
    isInsideCurbSurrenderZone(): boolean;
    private initAssets;
    private createHUD;
    getStars(): number;
    isInJail(): boolean;
    isSurrendering(): boolean;
    canSurrender(): boolean;
    notifyPlayerAttack(): void;
    /**
     * Escalates wanted stars ONLY (+1★ per escalation up to 5★, with cooldown) when the player
     * actively commits a new crime — never passively over time, on chase/LOS, or from NPC incidents.
     */
    reportCrime(kind: 'gunshot' | 'assault_npc' | 'kill_npc' | 'hijack' | 'rob_shop' | 'attack_police' | 'chaos' | 'k98_intrude', minStars?: number, label?: string): void;
    private getEscapeDurationForStars;
    resetOnGameStart(): void;
    clearWanted(preserveUnitsOffscreen?: boolean): void;
    private transitionUnitsToCalmPatrol;
    handleKeyDown(code: string): boolean;
    openSurrenderConfirmModal(): void;
    triggerSurrender(): void;
    private imprisonPlayer;
    tryPayBail(): void;
    private releaseFromJail;
    /**
     * Chết mất 100% tiền mặt trên người (tiền trong NC Bank vẫn giữ nguyên vẹn 100%).
     * Xóa sạch Giáp & Sao Truy Nã, lưu lại storage và trả về tổng tiền mặt đã mất.
     */
    exportLawState(): {
        wantedStars: number;
        inJail: boolean;
        jailTimer: number;
        jailedStars: number;
    };
    applySavedLawState(law?: {
        wantedStars?: number;
        inJail?: boolean;
        jailTimer?: number;
        jailedStars?: number;
    } | null): void;
    applyDeathPenalty(): number;
    handlePlayerBulletHit(rayOrigin: THREE.Vector3, rayDir: THREE.Vector3, maxDist: number, damage: number): {
        hit: boolean;
        hitPoint?: THREE.Vector3;
        isVehicle?: boolean;
    };
    handlePlayerMeleeHit(origin: THREE.Vector3, fwd: THREE.Vector3, range: number, damage: number): boolean;
    handlePlayerExplosion(center: THREE.Vector3, radius: number, maxDamage: number): void;
    private damageOfficer;
    private damageVehicle;
    update(timeStep: number): void;
    private checkUnitLineOfSight;
    private checkPoliceLineOfSight;
    private getNearestUnitDistance;
    private getDesiredTier;
    private maintainPursuitForces;
    private spawnPursuitVehicle;
    private spawnPursuitOfficer;
    private updateCalmPatrolLeftovers;
    private updatePursuitVehicles;
    private isVehicleBlockedAhead;
    private updatePursuitOfficers;
    private fireUnitWeapon;
    private updateTracers;
    private applyPlayerSurrenderArmPose;
    private renderWantedHUD;
    private renderJailHUD;
    private lerpAngle;
    setClientSyncDisabled(disabled: boolean): void;
    appendWorldSnapshotUnits(anchors: Array<{
        x: number;
        z: number;
    }>, radiusSq: number, npcsOut: Array<[number, string, number, number, number, number, string, number]>, vehsOut: Array<[number, string, number, number, number, number, number, number, number, number]>): void;
    private clearAllUnits;
    dispose(): void;
}
