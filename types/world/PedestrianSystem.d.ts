import * as THREE from 'three';
import { World } from './World';
import { NPCActor, NPCBrain } from './NPCBrain';
/**
 * Dynamic 15 km2 chunk-relative Pedestrian System:
 * Maintains 16 detailed unified 1.72m-calibrated 90s NPCs with connected rounded joints,
 * CanvasTexture faces, snug hairstyles/caps/non-la, upright Y-locked walking, and autonomous NPCBrain FSM + physics reactions.
 */
export declare class PedestrianSystem {
    private world;
    brain: NPCBrain;
    private agents;
    private initialized;
    private shirtMats;
    private trouserMats;
    private policeShirtMat;
    private armyCamoMat;
    private workerVestMat;
    private officeShirtMat;
    private terrorDarkMat;
    private streetEventTimer;
    private visCheckAccum;
    private networkSyncedMode;
    private readonly NPC_COUNT;
    private readonly MAX_DISTANCE;
    private static tmpVisPos;
    constructor(world: World);
    private initSharedAssets;
    private buildPedestrianMesh;
    private static tmpRayResult;
    private static tmpRayStart;
    private static tmpRayEnd;
    isWalkableZone(x: number, z: number): boolean;
    /**
     * Checks 1.2m ahead along NPC movement direction against walls, villa fences, house facades,
     * parked cars, and active vehicles so NPCs turn cleanly rather than clipping through geometry.
     */
    isPathBlockedAhead(x: number, y: number, z: number, dirX: number, dirZ: number, lookAhead?: number): boolean;
    private assignRoleByLocation;
    private assignNearbySidewalkRoute;
    private getSidewalkY;
    private spawnPedestrians;
    getAgents(): ReadonlyArray<NPCActor>;
    hasNearbyNPC(pos: THREE.Vector3, maxDist?: number): boolean;
    applyDamageToAgent(npc: NPCActor, damage: number, impulse: THREE.Vector3, isHeavy: boolean): void;
    notifyDanger(origin: THREE.Vector3, radius: number): void;
    applyExplosionInRadius(center: THREE.Vector3, radius: number, impulseStrength: number, maxDamage: number, attackerKind?: 'player' | 'npc'): void;
    update(timeStep: number): void;
    private triggerRandomStreetEvent;
    setClientSyncDisabled(disabled: boolean): void;
    appendWorldSnapshotNpcs(anchors: Array<{
        x: number;
        z: number;
    }>, radiusSq: number, out: Array<[number, string, number, number, number, number, string, number]>): void;
    clear(): void;
    reset(): void;
}
