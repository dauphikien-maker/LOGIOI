import * as THREE from 'three';
import { World } from './World';
export declare type NPCPersonality = 'coward' | 'tough' | 'mugger';
export declare type NPCRole = 'civilian' | 'police' | 'army' | 'worker' | 'office' | 'vendor' | 'villager';
export declare type NPCActivityKind = 'bench_rest' | 'chat_pair' | 'browse_shop' | 'park_exercise' | 'wait_taxi';
export declare type NPCState = 'IDLE' | 'WALKING' | 'WAITING' | 'ACTIVITY' | 'DODGING_CAR' | 'KNOCKED_DOWN' | 'FEAR_HANDS_UP' | 'FLEEING' | 'FIGHTING_BACK' | 'MUGGER_FLEE' | 'DEAD';
export interface NPCActor {
    id: number;
    gender: 'male' | 'female';
    role: NPCRole;
    activityKind: NPCActivityKind;
    isTerrorist?: boolean;
    isRioter?: boolean;
    baseYOffset: number;
    root: THREE.Group;
    torsoGroup: THREE.Group;
    armL: THREE.Group;
    armR: THREE.Group;
    forearmL: THREE.Group;
    forearmR: THREE.Group;
    legL: THREE.Group;
    legR: THREE.Group;
    shinL: THREE.Group;
    shinR: THREE.Group;
    npcPistol: THREE.Group;
    npcRifle: THREE.Group;
    personality: NPCPersonality;
    hasPistol: boolean;
    state: NPCState;
    hp: number;
    maxHp: number;
    stateTimer: number;
    x: number;
    y: number;
    z: number;
    dirX: number;
    dirZ: number;
    distRemaining: number;
    yaw: number;
    walkSpeed: number;
    walkCycle: number;
    lateralDodge: number;
    knockbackVel: THREE.Vector3;
    knockFallPitch: number;
    knockBaseY: number;
    wasHeavyHit: boolean;
    attackCooldown: number;
    mugCooldown: number;
    hasStolenCash: boolean;
    stolenAmount: number;
    droppedCashDone: boolean;
    hitCooldown: number;
    bubbleText: string;
    bubbleTimer: number;
    combatTargetKind?: 'player' | 'npc';
    combatTargetNpcId?: number;
    combatLostSightTimer?: number;
    brawlSearchCooldown?: number;
    fleeStuckTimer?: number;
    fleeStuckRefX?: number;
    fleeStuckRefZ?: number;
    evadeSteerTimer?: number;
    evadeDirX?: number;
    evadeDirZ?: number;
    pendingDespawn?: boolean;
}
/**
 * Finite State Machine & 3 Personalities for Nam Cang NPCs:
 * - ~60% Coward (FEAR_HANDS_UP / FLEEING)
 * - ~25% Tough (FIGHTING_BACK with melee & pistol)
 * - ~15% Mugger (Steals 300k-500k VND -> MUGGER_FLEE, drops bounty when defeated)
 * Includes car-dodge reflex, knockback physics, pooled overhead speech bubbles (2s auto-hide), and collectible cash stacks.
 */
export declare class NPCBrain {
    private world;
    private bubbleLayerEl;
    private bubblePool;
    private cashDrops;
    private cashGeo;
    private cashBandGeo;
    private cashMat;
    private cashBandMat;
    private npcTracers;
    private tracerMat;
    private agentsRef;
    private static projVec;
    private static losRayResult;
    private static losStart;
    private static losEnd;
    private static avoidRayResult;
    private static avoidRayStart;
    private static avoidRayEnd;
    constructor(world: World);
    private initBubbleLayer;
    static assignPersonality(id: number): {
        personality: NPCPersonality;
        hasPistol: boolean;
        maxHp: number;
    };
    resetActorForSpawn(npc: NPCActor): void;
    say(npc: NPCActor, text: string, duration?: number): void;
    applyDamage(npc: NPCActor, damage: number, impulse: THREE.Vector3, isHeavy: boolean, dropMultiplier?: number, attackerKind?: 'player' | 'npc', attackerNpcId?: number): void;
    triggerThreatResponse(npc: NPCActor, directHit: boolean): void;
    private dropNPCReward;
    spawnCashDrop(x: number, y: number, z: number, amount: number): void;
    private getGroundY;
    updateGlobalEffects(dt: number, agents?: ReadonlyArray<NPCActor>): void;
    updateAgent(npc: NPCActor, dt: number, getWalkable: (x: number, z: number) => boolean, isBlockedAhead?: (x: number, y: number, z: number, dirX: number, dirZ: number, lookAhead?: number) => boolean): void;
    /**
     * Chest-level obstacle clearance probe (walls/fences/buildings, vehicles, and water edge < 2m).
     */
    private measureClearanceAhead;
    private animateRiflePatrol;
    private animateNPCActivity;
    private checkIncomingCarDodge;
    private checkVehicleImpact;
    private updateKnockedPhysics;
    private hasLineOfSight;
    private findNearestLivingNpcTarget;
    private fireNPCPistolAtNpc;
    private fireNPCPistolAtPlayer;
    private syncGroundAndFacing;
    private animateLocomotion;
    private animateHandsUp;
    private animatePistolAim;
    private animateMeleeFight;
    updateSpeechBubbles(agents: ReadonlyArray<NPCActor>): void;
    clear(): void;
    dispose(): void;
}
