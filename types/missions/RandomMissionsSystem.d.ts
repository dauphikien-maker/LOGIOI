import * as THREE from 'three';
import { World } from '../world/World';
import { InteractionMarker } from '../world/map/LandmarksAndSecrets';
import { Vehicle } from '../vehicles/Vehicle';
export declare type MissionMechanic = 'rescue_escort' | 'pet_follow' | 'assassinate_sniper' | 'chase_fugitive_veh' | 'defend_waves' | 'fragile_delivery' | 'guard_watch' | 'street_race' | 'stealth_photo' | 'defuse_bombs' | 'refuel_rescue' | 'recover_stolen_car' | 'escort_armored_van' | 'destroy_targets' | 'tail_spy_car' | 'stop_racers' | 'emergency_patient' | 'intercept_truck' | 'catch_thieves' | 'treasure_nogps' | 'witness_escape' | 'unarmed_brawl' | 'ambush_deal' | 'speed_test' | 'night_steal_escape' | 'mountain_hiker' | 'destroy_gang_cars' | 'deliver_items' | 'abandoned_house_clues' | 'stop_store_robbery';
export interface MissionDef {
    id: number;
    title: string;
    clientName: string;
    district: string;
    dialogue: string;
    objectiveSummary: string;
    mechanic: MissionMechanic;
    reward: number;
    bonusReward?: number;
    nightPreferred?: boolean;
    startX: number;
    startZ: number;
    targetX: number;
    targetZ: number;
    returnX?: number;
    returnZ?: number;
    timeLimit?: number;
    extraPoints?: Array<{
        x: number;
        z: number;
    }>;
    hint?: string;
}
export declare const MISSION_CATALOG: MissionDef[];
interface MissionEnemy {
    id: number;
    group: THREE.Group;
    armL: THREE.Group;
    armR: THREE.Group;
    legL: THREE.Group;
    legR: THREE.Group;
    x: number;
    y: number;
    z: number;
    hp: number;
    maxHp: number;
    isHostile: boolean;
    isAllyFollower?: boolean;
    isDog?: boolean;
    roleLabel: string;
    walkCycle: number;
    fireCooldown: number;
    dead: boolean;
}
interface MissionProp {
    id: string;
    mesh: THREE.Group;
    x: number;
    y: number;
    z: number;
    hp: number;
    interacted: boolean;
    marker?: InteractionMarker;
}
interface MissionRacer {
    mesh: THREE.Group;
    x: number;
    z: number;
    wpIndex: number;
    speed: number;
}
export interface ActiveMissionRuntime {
    def: MissionDef;
    stage: number;
    timer: number;
    fragility: number;
    subLabel: string;
    holdProgress: number;
    unarmedBroken: boolean;
    sniperBonusEarned: boolean;
    flashlightBonusEarned: boolean;
    maxSpeedSeen: number;
    highSpeedHold: number;
    suspicion: number;
    targetVehicle?: Vehicle | null;
    pursuitVehicles: Vehicle[];
    racers: MissionRacer[];
    enemies: MissionEnemy[];
    props: MissionProp[];
}
/**
 * 30 Completely Distinct Optional Open-World Missions (Đợt 4/5):
 * - Zero repetitive cookie-cutter loops; each mission owns tailored storyline, location, mechanics & bonus rules.
 * - Optional curbside/landmark circles requiring explicit [E] accept confirmation.
 * - RoadGraph shortest-path GPS guidance (intentionally omitted on #20 Treasure Hunt).
 * - Persisted X / 30 completion progress shown on Phone [F].
 */
export declare class RandomMissionsSystem {
    private world;
    private completedIds;
    private offerMarkers;
    active: ActiveMissionRuntime | null;
    private hudEl;
    private sharedGeos;
    private sharedMats;
    private nextActorId;
    private tracers;
    private tracerMat;
    private deferredCleanup;
    private deferredCleanupAccum;
    private static tmpVisPos;
    constructor(world: World);
    private initAssets;
    private createHUD;
    exportCompletedIds(): number[];
    applySavedIds(ids?: number[]): void;
    getCompletedCount(): number;
    isCompleted(id: number): boolean;
    getCatalog(): ReadonlyArray<MissionDef>;
    rebuildOfferMarkers(): void;
    private clearOfferMarkers;
    private removeLandmarkMarker;
    handleKeyDown(code: string): boolean;
    handleMarkerAction(tag: string, marker: InteractionMarker): boolean;
    openMissionAcceptModal(def: MissionDef): void;
    private spawnMissionNPC;
    private spawnMissionProp;
    private spawnMissionVehicle;
    private setGPS;
    startMission(def: MissionDef): void;
    private spawnWaveAttackers;
    private interactWithProp;
    private removeProp;
    onPlayerWeaponDischarged(slot: number): void;
    notifyVehicleShock(veh: Vehicle, shockDelta: number): void;
    handlePlayerRayHit(rayOrigin: THREE.Vector3, rayDir: THREE.Vector3, maxDist: number, damage: number, slot: number): {
        hit: boolean;
        hitPoint?: THREE.Vector3;
    };
    handlePlayerMeleeHit(origin: THREE.Vector3, fwd: THREE.Vector3, range: number, damage: number, slot: number): boolean;
    handleExplosionAt(center: THREE.Vector3, radius: number, maxDamage: number): void;
    private damageProp;
    private damageEnemy;
    update(timeStep: number): void;
    private updateMissionEnemies;
    private evaluateMechanicProgress;
    private completeActiveMission;
    failActiveMission(reason: string): void;
    cancelActiveMission(): void;
    private cleanupActiveEntities;
    private processDeferredCleanup;
    private spawnTracer;
    private updateTracers;
    private renderHUD;
    dispose(): void;
}
export {};
