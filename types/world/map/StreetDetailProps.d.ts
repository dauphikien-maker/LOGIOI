import * as THREE from 'three';
import { ProceduralVehicleKind } from '../ProceduralVehicleFactory';
export interface ParkedVehicleTarget {
    key: string;
    bucket: PropBucketName;
    kind: ProceduralVehicleKind;
    colorHex: number;
    displayName: string;
    isMotorbike: boolean;
    x: number;
    y: number;
    z: number;
    yaw: number;
}
export declare type PropBucketName = 'zebraCrosswalk' | 'trafficLightPole' | 'trafficLightLens' | 'boulevardLamp' | 'streetLamp' | 'parkLamp' | 'medianPlanter' | 'utilityPole' | 'powerWire' | 'manhole' | 'fireHydrant' | 'trashBin' | 'busShelter' | 'roadBench' | 'signStop' | 'signSpeed' | 'billboardFrame' | 'billboard0' | 'billboard1' | 'billboard2' | 'billboard3' | 'billboard4' | 'parkedBikeCity' | 'parkedMotoMong' | 'parkedMotoMongNavy' | 'parkedMotoCup' | 'parkedMotoCupBrown' | 'parkedMotoGioRed' | 'parkedMotoGioBlue' | 'parkedMotoVespia' | 'parkedMotoVespiaMint' | 'parkedCarTojoSilver' | 'parkedCarTojoNavy' | 'parkedCarTojoBlack' | 'parkedCarTojoWine' | 'parkedCarTaxi' | 'parkedCarSuperCrimson' | 'parkedCarSuperGold' | 'parkedCarSuperCobalt' | 'streetPlanterPot' | 'shopSign0' | 'shopSign1' | 'shopSign2' | 'shopSign3' | 'shopSign4' | 'shopSign5' | 'shopSign6' | 'shopSign7' | 'shopSign8' | 'shopSign9' | 'shopSign10' | 'shopSign11' | 'shopSign12' | 'shopSign13' | 'shopSign14' | 'shopSign15';
export declare type ChunkDetailPlacements = Partial<Record<PropBucketName, THREE.Matrix4[]>>;
/**
 * Layer-3 Street Furniture, Crosswalks, Traffic Lights, Medians, Billboards & Parked Vehicles.
 * Uses globally pooled THREE.InstancedMesh (1 shared Geometry + Material per archetype across all
 * 5x5 active streamed chunks) to keep total Draw Calls well below 140 at steady 60Hz FPS with zero leaks.
 */
export declare class StreetDetailProps {
    root: THREE.Group;
    private chunkPlacements;
    private chunkDoorZones;
    private meshes;
    private fullBucketCounts;
    private detailDensityScale;
    private specs;
    private materialsToDispose;
    private texturesToDispose;
    private billboardMats;
    private lampBulbMat;
    private consumedParkedKeys;
    private lastActiveChunkKeys;
    private activeParkedVehicles;
    static makeParkedKey(x: number, z: number): string;
    constructor(scene: THREE.Scene);
    registerChunkPlacements(chunkKey: string, placements: ChunkDetailPlacements, doorZones?: Array<{
        x: number;
        z: number;
    }>): void;
    unregisterChunk(chunkKey: string): void;
    /**
     * Re-uploads instance transforms ONLY when chunks enter or exit the 5x5 active streaming window,
     * enforcing a strict global Occupancy Registry (>= 3.5m gap between any two static vehicles,
     * >= 1.5m doorway walkway clearance, and zero solid-prop overlap across chunk boundaries).
     */
    syncActiveChunks(activeKeys: Set<string>): void;
    /**
     * Adjusts ONLY non-colliding small decorative prop density for graphics quality tiers
     * without touching parked vehicles, shop signs, poles, traffic signals, or physics bodies.
     */
    setDetailDensity(density: number): void;
    dispose(): void;
    private stampVertexColor;
    private partBox;
    private partRoundedBox;
    private partCyl;
    private mergeParts;
    /**
     * Bakes a complete ProceduralVehicleFactory static visual group into a single vertex-colored BufferGeometry
     * grounded cleanly so tire bottoms rest at local Y = 0.0.
     */
    private bakeParkedVehicle;
    private createTrafficSignMat;
    private createBillboardPosterMat;
    setNightEmissive(isNight: boolean): void;
    private registerSpec;
    private buildArchetypes;
    getActiveParkedVehicles(): ReadonlyArray<ParkedVehicleTarget>;
    consumeParkedVehicle(key: string): void;
    resetConsumedParked(): void;
    getParkedVehicleTransforms(): Array<{
        bucket: string;
        x: number;
        y: number;
        z: number;
    }>;
}
