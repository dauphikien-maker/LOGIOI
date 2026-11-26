import * as THREE from 'three';
/**
 * Shared 512x512 / 512x2048 Procedural PBR Material Library for the 15 km2 Nam Cang open world.
 * Fixes container/shop UV horizontal flip on -Z/-X faces, increases mountain terrain tiling,
 * adds Stadium Pitch, Mini-Court, 4 Luxury Villa styles, and 4 Working-Class/Collective styles.
 */
export declare const FICTIONAL_SHOP_SIGNS: Array<{
    text: string;
    bg: string;
    fg: string;
    border: string;
}>;
export declare class MapMaterialLibrary {
    private static initialized;
    private static shopSignMats;
    static urbanSidewalkMat: THREE.MeshStandardMaterial;
    static curbConcreteMat: THREE.MeshStandardMaterial;
    static asphaltRoadMat: THREE.MeshStandardMaterial;
    static roadMarkingMat: THREE.MeshStandardMaterial;
    static portConcreteMat: THREE.MeshStandardMaterial;
    static airportTarmacMat: THREE.MeshStandardMaterial;
    static runwayCenterMat: THREE.MeshStandardMaterial;
    static runwayThresholdMat: THREE.MeshStandardMaterial;
    static sandBeachMat: THREE.MeshStandardMaterial;
    static mountainTurfMat: THREE.MeshStandardMaterial;
    static canalWallMat: THREE.MeshStandardMaterial;
    static footballPitchMat: THREE.MeshStandardMaterial;
    static miniCourtMat: THREE.MeshStandardMaterial;
    static poolWaterMat: THREE.MeshStandardMaterial;
    static downtownAtlasMat: THREE.MeshStandardMaterial;
    static oldTownAtlasMat: THREE.MeshStandardMaterial;
    static luxuryVillaAtlasMat: THREE.MeshStandardMaterial;
    static poorDistrictAtlasMat: THREE.MeshStandardMaterial;
    static portContainerAtlasMat: THREE.MeshStandardMaterial;
    static foliageVertexMat: THREE.MeshStandardMaterial;
    static streetPropVertexMat: THREE.MeshStandardMaterial;
    static corrugatedRoofMat: THREE.MeshStandardMaterial;
    private static setupTexture;
    static init(): void;
    private static buildUrbanSidewalkMat;
    private static buildAsphaltRoadMat;
    private static buildPortConcreteMat;
    private static buildAirportTarmacMat;
    private static buildRunwayCenterMat;
    private static buildRunwayThresholdMat;
    private static buildSandBeachMat;
    private static buildMountainTurfMat;
    private static buildFootballPitchMat;
    private static buildMiniCourtMat;
    private static buildCorrugatedRoofMat;
    private static buildDowntownAtlasMat;
    private static buildOldTownAtlasMat;
    /**
     * Luxury Hills ("Đồi Phú Quý"): 4 Distinct Mansion Facade Styles
     * 0: Modernist White-Grey + Panoramic Glass | 1: Neo-Classical Cream w/ Arched Windows
     * 2: Warm Dark Timber + Concrete Garden Villa | 3: Coastal Limestone Glass Villa
     */
    private static buildLuxuryVillaAtlasMat;
    /**
     * Khu Dân Cư Bình Dân & Tập Thể (5 Varied Working-Class Wall Styles w/ Ground Plinth AO)
     * 0: 5F Collective Apt ("Khu Tập Thể") | 1: Dusty Terracotta House
     * 2: Faded Blue-Grey House | 3: Warm Cream-Ochre "Hủ Tiếu Đêm" | 4: Cấp 4 Brick-Skirt House
     */
    private static buildPoorDistrictAtlasMat;
    private static buildPortContainerAtlasMat;
    static createBandBox(w: number, h: number, d: number, x: number, y: number, z: number, bandIdx: number, uTileScale?: number, tintHex?: number, bandCount?: number): THREE.BufferGeometry;
    static createWorldTiledSlab(w: number, h: number, d: number, x: number, y: number, z: number, uvMetersPerTile?: number): THREE.BufferGeometry;
    /**
     * Builds and caches 16 crisp fictional Vietnamese shopfront sign materials (decoupled from wall atlas!).
     */
    static getShopSignMaterials(): THREE.MeshStandardMaterial[];
}
