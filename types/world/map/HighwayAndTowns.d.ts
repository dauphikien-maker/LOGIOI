import * as THREE from 'three';
import { World } from '../World';
/**
 * Part 1 World Module:
 * - Curved Organic Perimeter Ring Highway w/ InstancedMesh W-beam Guardrails & Green Gantries
 * - Vong Canh Lake Town ("Thị Trấn Ven Hồ") + 280m Dirt Airstrip + Rusty Hangar + Fluttering Windsock + Boats
 * - Sunset Festival Pier ("Bến Tàu Hoàng Hôn") w/ InstancedMesh Pilings, Carnival Booths & 32m Rotating Ferris Wheel
 * - Giant Mountain Sign ("NAM CẢNG") anchored deep into Vong Canh South Slope
 * - Vong Canh Hydroelectric Dam + Substation + 14-Turbine Animated Wind Farm + Summit Observatory
 */
export declare class HighwayAndTowns {
    private world;
    root: THREE.Group;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private ferrisWheelHub;
    private ferrisCabins;
    private ferrisAngle;
    private windTurbineRotors;
    private windsockPivot;
    private lakeBoats;
    private elapsedTime;
    private disposables;
    constructor(world: World);
    private trackGeo;
    private createCanvasMat;
    private addStaticBox;
    private addStreamedCollider;
    /**
     * Single-source-of-truth 1-to-1 helper creating both the Three.js mesh and Cannon collider box.
     */
    private addBoxWithCollider;
    private getHighwayElevation;
    private buildLakeTownAndDirtStrip;
    private buildSunsetPierAndFerrisWheel;
    private buildMountainSign;
    private buildHydroelectricDamAndSubstation;
    private buildWindFarm;
    private buildSummitObservatory;
    update(timeStep: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
