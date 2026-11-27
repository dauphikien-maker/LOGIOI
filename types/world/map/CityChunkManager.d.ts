import * as THREE from 'three';
import * as CANNON from 'cannon';
import { World } from '../World';
import { StreetDetailProps } from './StreetDetailProps';
/**
 * Manages 24 x 24 (576 chunks = 14.75 km2) open-world streaming at 60 FPS:
 * - Visual streaming radius: 5 x 5 chunks (+-2) around player with LRU geometry caching
 * - Physics streaming radius: 3 x 3 chunks (+-1) around player, dynamically adding/removing Cannon Static Bodies
 * - Pooled GPU-Instanced Layer-3 Street Details & Parked Vehicles synced seamlessly with active chunks
 */
export declare class CityChunkManager {
    private world;
    private root;
    private detailProps;
    private chunkCache;
    private activeVisualKeys;
    private visibleDetailKeys;
    private activePhysicsKeys;
    private seafloorBody;
    private lastPlayerCX;
    private lastPlayerCZ;
    private VISUAL_RADIUS;
    private PHYSICS_RADIUS;
    private readonly MAX_POOL_CHUNKS;
    private cullKeyCursor;
    setVisualRadius(radius: number): void;
    constructor(world: World);
    getSeafloorBody(): CANNON.Body;
    /**
     * Step-by-step asynchronous chunk & Cannon.js physics prebuilder for smooth 0%->100% loading screen.
     */
    getStreamingBuildCount(x: number, z: number): number;
    stepBuildAround(x: number, z: number, budgetPerStep?: number): boolean;
    /**
     * Immediately streams all visual (5x5) and physics (3x3) chunks around target coordinates.
     * Must be called before Fast Travel teleportation to prevent falling through unbuilt ground.
     */
    forceBuildAround(x: number, z: number): void;
    getActivePhysicsChunkCount(): number;
    update(): void;
    private updateStreamingWindow;
    /**
     * Periodic Distance Culling for loaded chunks: hides buildings/foliage/props beyond renderDistance
     * while preserving ALL ground/road/terrain surfaces and Cannon.js colliders intact.
     */
    updateDistanceCulling(px: number, pz: number, renderDistance: number, forceSyncDetails?: boolean): void;
    setNightEmissive(isNight: boolean): void;
    getDetailProps(): StreetDetailProps;
    /**
     * Removes the static parked-vehicle collider from active chunk physics bodies
     * when the player enters and converts that street vehicle into a live Vehicle.
     */
    removeParkedCollider(x: number, z: number, parkedKey?: string): void;
    getActiveVisualGroups(): THREE.Object3D[];
    reset(): void;
    dispose(): void;
}
