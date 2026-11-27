import * as THREE from 'three';
import { World } from '../World';
export declare type LandmarkKind = 'bank' | 'fashion' | 'bar' | 'garage' | 'gas';
export interface InteractionMarker {
    id: string;
    kind: LandmarkKind | 'secret' | 'custom';
    title: string;
    promptLabel: string;
    position: THREE.Vector3;
    radius: number;
    ringMesh: THREE.Mesh;
    pillarMesh: THREE.Mesh;
    allowVehicle: boolean;
    secretIndex?: number;
    actionTag?: string;
    payload?: any;
}
export interface SecretMeta {
    index: number;
    name: string;
    districtHint: string;
    reward: number;
    position: THREE.Vector3;
    collected: boolean;
    rumored: boolean;
    crateMesh?: THREE.Group;
    ringMesh?: THREE.Mesh;
}
/**
 * Builds all 5 interactive Landmarks set cleanly INSIDE chunk block lots with dedicated concrete aprons,
 * white parking stalls, planters & connecting asphalt driveways (zero road/grass overlaps!),
 * plus 4 Steel Port Gantry Cranes, Airport ATC Tower, exact beam-joined Offshore Lattice Tower & 6 Secrets.
 */
export declare class LandmarksAndSecrets {
    private world;
    root: THREE.Group;
    markers: InteractionMarker[];
    secrets: SecretMeta[];
    private gpsBeaconGroup;
    private beaconSpinTime;
    private landmarkBodies;
    constructor(world: World);
    private createSignMaterial;
    private createStripedAwningMaterial;
    private createHelipadTexture;
    private addStaticBox;
    /**
     * Connects two exact 3D endpoints with a watertight beam so pyramidal lattice towers never misalign.
     */
    private addBeamBetweenPoints;
    /**
     * Adds a raised paved forecourt pad (top Y = 0.21m) inside the block lot plus one or two
     * connecting driveways terminating flush at the road shoulder with a sloped ramp down to Y = 0.005m.
     */
    private addPavedLotWithDriveway;
    private addPhysicsBox;
    /**
     * Single-source-of-truth 1-to-1 helper creating both the Three.js mesh and Cannon collider box.
     */
    private addBoxWithCollider;
    addMarker(id: string, kind: LandmarkKind | 'secret' | 'custom', title: string, promptLabel: string, pos: THREE.Vector3, radius: number, colorHex: number, allowVehicle: boolean, secretIndex?: number, actionTag?: string, payload?: any): InteractionMarker;
    private buildAllLandmarks;
    private buildPortGantryCranes;
    private buildAirportControlTower;
    private createBriefcaseMesh;
    private registerSecret;
    private buildAllSecrets;
    private buildGPSBeacon;
    setGPSBeacon(x: number, y: number, z: number): void;
    clearGPSBeacon(): void;
    private buildLoungeLandmark;
    update(timeStep: number): void;
    markSecretCollected(index: number): void;
    dispose(): void;
}
