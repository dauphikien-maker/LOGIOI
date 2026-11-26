import * as THREE from 'three';
import * as CANNON from 'cannon';
import { ChunkDetailPlacements } from './StreetDetailProps';
export interface BuiltChunkData {
    cx: number;
    cz: number;
    key: string;
    visualGroup: THREE.Group;
    detailPlacements: ChunkDetailPlacements;
    doorClearZones: Array<{
        x: number;
        z: number;
    }>;
    physicsShapes: Array<{
        halfExtents: CANNON.Vec3;
        position: CANNON.Vec3;
        rotationX?: number;
        rotationY?: number;
        rotationZ?: number;
        parkedKey?: string;
    }>;
    heightfields: Array<{
        data: number[][];
        elementSize: number;
        minValue: number;
        maxValue: number;
        position: CANNON.Vec3;
    }>;
    physicsBody: CANNON.Body | null;
}
/**
 * Cohesive GTA-5-style 160m x 160m deterministic chunk builder:
 * - Zero sidewalk/curb/driveway Z-fighting & strictly lot-clamped pitched roofs
 * - Discrete perimeter row-houses (1-4 floors, 0.3-0.8m setbacks, 5 wall materials, 0.4m dark plinth, balconies/awnings)
 * - Đồi Phú Quý pillared stone+iron compound fences, wide driveways & backyard pools
 * - Central Park w/ winding stone paths, multi-tier fountain, organic shoreline lake & low border fencing
 * - Nam Cảng Airport w/ taxiway markings, perimeter security fence, 4 detailed static aircraft & cargo tugs
 * - Emits deterministic Layer-3 instanced street props, traffic signals, billboards & parked vehicles
 */
export declare class CityChunkBuilder {
    private static tmpPos;
    private static tmpQuat;
    private static tmpScale;
    private static tmpAxisY;
    private static glassPanelMat;
    private static getGlassPanelMat;
    private static ensureVertexAttrs;
    private static pushColoredBox;
    private static pushSimpleBox;
    private static createOrientedBandBox;
    private static addFlatLine;
    private static hasColliderNear;
    private static pushProp;
    private static pushClampedHipRoof;
    static buildChunk(cx: number, cz: number): BuiltChunkData;
    static buildPhysicsBody(chunk: BuiltChunkData): CANNON.Body | null;
    private static pushGridHeightfieldCollider;
    private static addFlatLandCollider;
    private static addRoadGridForChunk;
    private static populateRoadAndCornerProps;
    private static addPerimeterHighwayDetails;
    private static addUrbanTree;
    private static addFlowerShrub;
    private static addPalmTree;
    private static addPineTree;
    private static addTeaStallProps;
    private static buildDowntownChunk;
    private static addContouredHillsGridAndRoads;
    private static addCypressAndPalmPrivacyEdge;
    private static addOrnamentalIronGateAndGuardhouse;
    private static buildHillsideLoungeChunk;
    private static buildHillsEstateCompound;
    private static buildLuxuryHillsChunk;
    /**
     * Builds an isolated Flagship Super-Villa Estate on Đồi Phú Quý with arched gateway,
     * grand colonnade facade, swimming pool courtyard, sculpted gardens, and 3 parked supercars.
     */
    private static buildSuperVillaCompound;
    /**
     * Xóm Làng Nam Bộ (converted southern 50% of former Đồi Phú Quý):
     * Non-grid curving dirt/rural concrete lanes, narrow alleys, tile-roofed houses with brick courtyards,
     * circular stone Giếng Nước Làng, and bamboo/flowering hibiscus fences with full Cannon.js colliders.
     */
    private static buildRuralVillageChunk;
    /**
     * Places a single discrete townhouse/shophouse/Cấp-4 lot strictly bounded to (bodyW x bodyD)
     * facing `yaw` (+Z for 0, -Z for PI, +X for PI/2, -X for -PI/2), with:
     * - Per-lot floor height stepping (1 to 4 floors) & front setback (0.3-0.8m)
     * - 5 varied exterior wall styles (across poorDistrictAtlasMat 5-band & oldTownAtlasMat)
     * - 0.4m dark ground plinth, sloped corrugated awning, projecting balconies + slim iron railings,
     *   AC units, rooftop stainless water tank, and strictly footprint-clamped Cấp-4 pitched roofs!
     */
    private static addDetailedRowHouse;
    /**
     * Lays out discrete street-facing perimeter rows on North/South & West/East streets around every block
     * (depth 13-15m max -> NEVER spanning the whole quadrant!) plus an explorable 4m inner alley & courtyard core.
     */
    private static buildSegmentedTownBlock;
    private static buildPoorDistrictChunk;
    private static buildOldTownChunk;
    private static buildStadiumChunk;
    private static addVillaPillaredFenceEdge;
    private static buildParkChunk;
    private static buildPortChunk;
    private static addStaticParkedAirplane;
    private static buildAirportChunk;
    private static buildBeachChunk;
    private static buildCoastalShelfTransition;
    private static buildMountainChunk;
    private static buildCanalChunk;
    private static buildOffshoreIsland;
}
