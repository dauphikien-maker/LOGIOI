import * as THREE from 'three';
import { World } from './World';
import { TrafficVisualResult } from './ProceduralVehicleFactory';
import { Character } from '../characters/Character';
import { ParkedVehicleTarget } from './map/StreetDetailProps';
export interface TrafficAgent {
    netId: number;
    visual: TrafficVisualResult;
    pos: THREE.Vector2;
    yaw: number;
    leanAngle: number;
    currentSpeed: number;
    cruiseSpeed: number;
    wheelRadius: number;
    dir: number;
    lineCoord: number;
    nextCrossCoord: number;
    turnState: 'straight' | 'turning';
    turnOutDir: number;
    turnProgress: number;
    p0: THREE.Vector2;
    p1: THREE.Vector2;
    p2: THREE.Vector2;
    stuckTimer: number;
    laneOffset: number;
    targetLaneOffset: number;
    overtakeTimer: number;
    reverseTimer: number;
    panicTimer: number;
    hp: number;
    wrecked: boolean;
    smokeTimer: number;
    pendingDespawn?: boolean;
}
/**
 * Dynamic 15 km2 chunk-relative Traffic System:
 * Keeps 14 active AI motorbikes and 90s sedans streaming along drivable avenues, city grids,
 * canal bridges, and Ring Highway roads near the player's active neighborhood.
 */
export declare class TrafficSystem {
    private world;
    private agents;
    private pendingRespawns;
    private interactPromptEl;
    private nearestHijackTarget;
    private lastPromptText;
    private static tmpDelta;
    private static tmpFwd;
    private static tmpTangent;
    private static tmpPrevPos;
    private static tmpVisPos;
    private smokeGeo;
    private smokeMat;
    private smokePuffs;
    private nearestParkedTarget;
    private visCheckAccum;
    private networkSyncedMode;
    private static nextNetId;
    private readonly FLEET_SIZE;
    private readonly MAX_DISTANCE_FROM_PLAYER;
    constructor(world: World);
    private ensureInteractPrompt;
    private isDrivableZone;
    private spawnInitialFleet;
    private spawnNear;
    private createEmptyAgent;
    private resetAgentState;
    private relocateAgentNear;
    private randomKind;
    update(timeStep: number): void;
    private updateSmokePuffs;
    private emitSmoke;
    private updateSingleAgent;
    private syncVisualTransform;
    private isCorridorClear;
    private computeTargetSpeed;
    private lerpAngle;
    getAgents(): ReadonlyArray<TrafficAgent>;
    getNearestHijackDistance(pos: THREE.Vector3): number;
    reactToHit(agent: TrafficAgent, damage: number, impulseDir?: THREE.Vector3, isExplosion?: boolean): void;
    pushAgentsInRadius(center: THREE.Vector3, radius: number, impulseStrength: number, damage: number): void;
    private updateInteractPrompt;
    getNearestParkedTarget(pos: THREE.Vector3, maxDist?: number): ParkedVehicleTarget | null;
    tryEnterNearestParked(player: Character): boolean;
    tryHijackNearest(player: Character): boolean;
    setClientSyncDisabled(disabled: boolean): void;
    appendWorldSnapshotVehicles(anchors: Array<{
        x: number;
        z: number;
    }>, radiusSq: number, out: Array<[number, string, number, number, number, number, number, number, number, number]>): void;
    clear(): void;
    reset(): void;
}
