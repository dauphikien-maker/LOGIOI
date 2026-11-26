import * as THREE from 'three';
export declare type ProceduralVehicleKind = 'bike_city' | 'moto_mong' | 'moto_cup' | 'moto_gio' | 'moto_vespia' | 'car_taxi' | 'car_tojo' | 'car_super' | 'car_police' | 'car_firetruck' | 'car_military' | 'tank_k98';
export interface ProceduralVehicleDescriptor {
    id: ProceduralVehicleKind;
    displayName: string;
    category: 'bicycle' | 'motorbike' | 'car' | 'heavy' | 'tank';
    defaultColors: number[];
    topSpeedKmh: number;
    maxSpeedMs: number;
    engineForce: number;
    mass: number;
    fuelCapacity: number;
    fuelBurnPerSec: number;
    usesFuel: boolean;
    frictionSlip: number;
    showroomPrice: number | null;
}
export declare const PROCEDURAL_VEHICLE_CATALOG: Record<ProceduralVehicleKind, ProceduralVehicleDescriptor>;
export interface TrafficVisualResult {
    root: THREE.Group;
    wheels: THREE.Object3D[];
    leanPivot?: THREE.Group;
    handlebars?: THREE.Group;
    kind: ProceduralVehicleKind;
    displayName: string;
    colorHex: number;
    plateText: string;
    isMotorbike: boolean;
}
/**
 * Generates shared procedural Three.js + PBR vehicles calibrated to 1.65m real-world scale.
 * Zero external models; supports live repainting, custom plates, and tuning in Garage.
 */
export declare class ProceduralVehicleFactory {
    private static initialized;
    private static sharedMats;
    private static paintMatCache;
    private static plateMatCache;
    private static sharedGeos;
    private static plateCounter;
    private static nightLightsOn;
    static setNightLightsEnabled(enabled: boolean): void;
    private static initShared;
    private static getPaintMaterial;
    static createPlateMaterial(plateText: string): THREE.MeshStandardMaterial;
    private static createTaxiSignMaterial;
    static generatePlateNumber(): string;
    private static mesh;
    private static buildWheelObject;
    static isTwoWheeler(kind: string): boolean;
    static createPhysicsVehicleGLTF(kind: ProceduralVehicleKind, colorHex?: number, plateText?: string): {
        scene: THREE.Group;
        wheelRadius: number;
        suspensionRestLength: number;
        plateText: string;
        colorHex: number;
        kind: ProceduralVehicleKind;
        displayName: string;
        vehicleSpec: ProceduralVehicleDescriptor;
    };
    static createTrafficVisual(kind: ProceduralVehicleKind, colorHex?: number, withRider?: boolean): TrafficVisualResult;
    private static createMotorbikeRiderNPC;
    private static createVehicleStructure;
    private static buildBicycle;
    private static buildFiretruck;
    private static buildMilitaryTruck;
    private static buildTankK98;
    private static buildMotorbike;
    private static buildSedan;
    private static buildSupercar;
}
