import * as THREE from 'three';
import { World } from './World';
import { IUpdatable } from '../interfaces/IUpdatable';
export declare class Sky extends THREE.Object3D implements IUpdatable {
    updateOrder: number;
    sunPosition: THREE.Vector3;
    sunDirection: THREE.Vector3;
    sunLight: THREE.DirectionalLight;
    hemiLight: THREE.HemisphereLight;
    set theta(value: number);
    set phi(value: number);
    private _phi;
    private _theta;
    private skyMesh;
    private skyMaterial;
    private cloudDomeMesh;
    private envRenderTarget;
    private rainSystem;
    private rainPositions;
    isRaining: boolean;
    currentWeatherMode: 'morning' | 'sunset' | 'night' | 'rain';
    private nightLightsActive;
    private lastSyncedTimeMin;
    private rainOverrideActive;
    private lastEnvHour;
    private world;
    constructor(world: World);
    private createCloudDomeTexture;
    /**
     * Generate crisp daylight IBL environment map via PMREMGenerator for glass & car paint reflections.
     */
    generateEnvironmentMap(renderer: THREE.WebGLRenderer): void;
    setShadowsEnabled(enabled: boolean): void;
    getRainDebugState(): {
        rainSystem: THREE.LineSegments | null;
        positions: Float32Array | null;
        sunLight: THREE.DirectionalLight;
        hemiLight: THREE.HemisphereLight;
    };
    update(timeStep: number): void;
    private syncLightingFromWorldTime;
    private baseFogDensity;
    private graphicsFogMultiplier;
    private ensureRainSystem;
    private updateRain;
    setRainEnabled(enabled: boolean): void;
    refreshSunPosition(): void;
    refreshHemiIntensity(): void;
    setFogDistanceScale(mult: number): void;
    setTimeOfDay(preset: 'morning' | 'sunset' | 'night' | 'rain'): void;
}
