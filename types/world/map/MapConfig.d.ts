import * as THREE from 'three';
export declare enum ZoneType {
    OCEAN = "ocean",
    DOWNTOWN = "downtown",
    OLD_TOWN = "old_town",
    LUXURY_HILLS = "luxury_hills",
    RURAL_VILLAGE = "rural_village",
    SUBURBS_POOR = "suburbs_poor",
    STADIUM = "stadium",
    PARK = "park",
    PORT_INDUSTRIAL = "port",
    AIRPORT = "airport",
    BEACH_SUBURBS = "beach",
    MOUNTAIN = "mountain",
    MILITARY = "military",
    PRISON = "prison",
    LAKE_TOWN = "lake_town"
}
export declare const MAP_CURVED_HIGHWAY_WAYPOINTS: Array<[number, number]>;
export declare const MAP_CONSTANTS: {
    CHUNK_SIZE: number;
    GRID_COUNT: number;
    WORLD_SIZE: number;
    HALF_WORLD: number;
    PLAYER_HEIGHT: number;
    DOOR_WIDTH: number;
    DOOR_HEIGHT: number;
    FLOOR_HEIGHT_RESIDENTIAL: number;
    FLOOR_HEIGHT_COMMERCIAL: number;
    STREET_WIDTH: number;
    POOR_STREET_WIDTH: number;
    AVENUE_WIDTH: number;
    RING_HIGHWAY_WIDTH: number;
    CURB_HEIGHT: number;
    CANAL_MIN_Z: number;
    CANAL_MAX_Z: number;
    CANAL_WATER_Y: number;
    OCEAN_WATER_Y: number;
    RING_X: number;
    RING_Z: number;
    BRIDGE_X_COORDS: readonly [-640, 0, 640];
    MOUNTAIN_Z_START: number;
    MOUNTAIN_PEAK_X: number;
    MOUNTAIN_PEAK_Z: number;
    MOUNTAIN_PEAK_Y: number;
    LAKE_CENTER_X: number;
    LAKE_CENTER_Z: number;
    PARK_CX: number;
    PARK_CZ: number;
    PARK_CENTER_X: number;
    PARK_CENTER_Z: number;
    STADIUM_CX: number;
    STADIUM_CZ: number;
    STADIUM_CENTER_X: number;
    STADIUM_CENTER_Z: number;
    AIRPORT_MIN_X: number;
    AIRPORT_MAX_X: number;
    AIRPORT_MIN_Z: number;
    AIRPORT_MAX_Z: number;
    RUNWAY_Z: number;
    RUNWAY_MIN_X: number;
    RUNWAY_MAX_X: number;
    ISLAND_CENTER_X: number;
    ISLAND_CENTER_Z: number;
    ISLAND_RADIUS: number;
    PLAYER_SPAWN: THREE.Vector3;
};
export interface BridgeSpec {
    x: number;
    width: number;
    minZ: number;
    maxZ: number;
    deckY: number;
}
export declare const BRIDGES: BridgeSpec[];
export declare const ZONE_LABELS: Record<ZoneType, string>;
/**
 * Deterministic organic island coastline, elevation/lake/hill math, and unified GTA 5 zoning
 * for the 15 km2 Nam Cang open world.
 */
export declare class MapConfig {
    static worldToChunk(x: number, z: number): {
        cx: number;
        cz: number;
    };
    static chunkToWorldCenter(cx: number, cz: number): {
        x: number;
        z: number;
    };
    static isValidChunk(cx: number, cz: number): boolean;
    static chunkSeed(cx: number, cz: number, salt?: number): number;
    /**
     * Bit-mixed deterministic coordinate hash across world coordinates (x, z).
     */
    static hashCoords(x: number, z: number, salt?: number): number;
    static seededRand(seed: number): () => number;
    /**
     * Smooth organic island perimeter distance (<= 0 means inside main island landmass, > 0 means ocean).
     * Combines elliptical body with harmonic coastline curves + SW Port & SE Airport peninsulas.
     */
    static getIslandSignedDist(x: number, z: number): number;
    static isInsideNorthernLake(x: number, z: number): boolean;
    static getZoneAtWorld(x: number, z: number): ZoneType;
    static getZoneNameAt(x: number, z: number): string;
    private static _cachedCurvePts;
    static getCurvedHighwaySamples(): THREE.Vector2[];
    static isNearCurvedHighway(x: number, z: number, halfWidth?: number): boolean;
    static isCanalWater(x: number, z: number): boolean;
    /**
     * Computes continuous mountain height Y in Vọng Cảnh (including Northern Lake basin
     * and gentle hill rise into Luxury Hills Đồi Phú Quý!).
     */
    static getMountainElevation(x: number, z: number): number;
    /**
     * Smooth Vinewood-Hills-style undulating coastal hill terrain across Đồi Phú Quý
     * (x in [-1120..-320], z in [-640..-160]), rising 8..15m for sweeping Downtown/Ocean vistas
     * while tapering smoothly to 0.00m at perimeter highways/blocks, K-98 base & Safe House #3 pad.
     */
    static getHillElevation(x: number, z: number): number;
    /**
     * Deterministic elevation for Đảo Hoang Trạm Phát Sóng (-1680, -320):
     * flat 3.10m summit plateau (r <= 24m) descending cleanly across grass & sand into seabed.
     * Shared identically by CityChunkBuilder meshes, Cannon Heightfield, and getTerrainHeight().
     */
    static getIslandElevation(x: number, z: number): number;
    static getTerrainHeight(x: number, z: number): number;
    /**
     * Returns water surface Y (-1.6m) if (x, z) is in deep Ocean, Canal (off-bridge), or Northern Lake;
     * returns null on dry land, beaches above waterline, and bridges.
     */
    static getWaterLevelAt(x: number, z: number): number | null;
    /**
     * Returns true if (x, z) is inside playable water (ocean, canal outside bridges, or mountain lake).
     */
    static isWaterAt(x: number, z: number): boolean;
    /**
     * Returns true if (x, z) is in water or within `margin` meters of a water boundary.
     */
    static isNearWaterEdge(x: number, z: number, margin?: number): boolean;
    /**
     * Finds the nearest dry shoreline position safe from water for emergency rescue.
     */
    static findNearestShorePosition(x: number, z: number): {
        x: number;
        y: number;
        z: number;
    };
    static getGroundHeight(x: number, z: number): number;
    static getGroundHeightAt(x: number, z: number): number;
    static getSafeFastTravelPoint(x: number, z: number): {
        x: number;
        y: number;
        z: number;
    };
    /**
     * Strictly reserves entire Landmark/Stadium/Park/Secret chunk interiors so procedural buildings NEVER overlap them.
     */
    static readonly KEEPOUTS: Array<{
        x: number;
        z: number;
        rx: number;
        rz: number;
    }>;
    static isInsideKeepout(x: number, z: number, margin?: number): boolean;
    /**
     * Road drivable filter for AI TrafficSystem (forbids Airport, K-98, Prison, Lake Town, Stadium, Park, Mountain, Ocean).
     */
    static isRoadDrivableForAI(x: number, z: number): boolean;
    /**
     * Deterministic meandering spline road centerline points across Xóm Làng Nam Bộ chunks
     * (shared by CityChunkBuilder visuals and RoadGraph A* shortest-path routing).
     */
    static getVillageRoadSpline(cx: number, cz: number): {
        ewPoints: Array<{
            x: number;
            z: number;
        }>;
        nsPoints: Array<{
            x: number;
            z: number;
        }>;
    };
}
