import * as THREE from 'three';
/**
 * Always-visible ultra-lightweight distant horizon layer:
 * - Endless ocean surface (Y = -1.6m, which also fills Northern Valley Lake & Canal naturally)
 * - Continuous Base Island Terrain Deck (Y = -0.35m) so distant Downtown towers NEVER float
 *   above water when viewed from Vong Canh Mountain peak!
 * - Deep-rooted Downtown skyline cores (bottom at Y = -2.0m), Airport Runway bed, and Vong Canh Mountains + TV Tower.
 */
export declare class GlobalSkyline {
    root: THREE.Group;
    private chunkTowerMeshes;
    constructor(scene: THREE.Scene);
    private pushColoredBox;
    private buildOceanWater;
    private buildDistantIslandFloorAndSkyline;
    private buildMountainAndTVTower;
    /**
     * Hide low-detail distant Downtown skyline proxy boxes inside currently loaded detailed 5x5 chunks
     * so flat blue blocks never collide with detailed textured buildings.
     */
    setActiveLoadedChunks(activeChunkKeys: Set<string>): void;
}
