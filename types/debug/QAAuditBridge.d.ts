import { World } from '../world/World';
export interface QARainStats {
    isRaining: boolean;
    rainMeshExists: boolean;
    frustumCulled: boolean | null;
    totalDrops: number;
    inViewByYaw: {
        yaw0: number;
        yaw90: number;
        yaw180: number;
        yaw270: number;
        current: number;
    };
}
export interface QATelemetryReport {
    timestamp: string;
    player: {
        x: number;
        y: number;
        z: number;
        height: number;
        minY: number;
        groundY: number;
        footDeltaY: number;
        jitterAmplitude: number;
        seated: boolean;
    };
    npc: {
        nearestId: number | null;
        npcHeight: number | null;
        nearestDist: number | null;
        npcInsideStaticBoxCount: number;
        penetratingNpcIds: number[];
    };
    rain: QARainStats;
    graphics: {
        preset: string;
        visibleWorldMeshes: number;
        activePhysicsBodies: number;
        transparentNonGlassWorldMats: number;
        toneMapping: number;
        toneMappingExposure: number;
        outputEncoding: number;
        pixelRatio: number;
        shadowMapEnabled: boolean;
        shadowMapWidth: number;
        cameraFar: number;
        totalLightIntensity: number;
        sunIntensity: number;
        hemiIntensity: number;
    };
    weapon: {
        currentSlot: number;
        weaponName: string;
        ammoInMag: number;
        reserveAmmo: number;
        isAiming: boolean;
        scoped: boolean;
        weaponHolderVisible: boolean;
        projectilesCount: number;
        explosionsCount: number;
        dotForward: number | null;
    };
    vehicles: {
        activeVehicleCount: number;
        drivenVehicle: {
            kind: string;
            speed: number;
            posY: number;
            groundY: number;
            numWheelsOnGround: number;
            minSeatYDelta: number | null;
        } | null;
        parkedCount: number;
        minParkedSpacing: number | null;
        closePairsUnder3m: number;
    };
    perf: {
        avgFPS: number;
        drawCalls: number;
        errorCount: number;
        recentErrors: string[];
        hasNaN: boolean;
    };
}
export declare class QAAuditBridge {
    private world;
    private currentGraphicsPreset;
    private ySamples;
    private frameTimes;
    private lastDrawCalls;
    private capturedErrors;
    private cameraLockOverride;
    constructor(world: World);
    tick(unscaledDt: number): void;
    recordDrawCalls(calls: number): void;
    isReady(): boolean;
    startGame(): void;
    teleport(x: number, y?: number | null, z?: number): {
        x: number;
        y: number;
        z: number;
    };
    setCameraOrbit(yaw: number, pitch: number, dist: number, lock?: boolean): void;
    releaseCameraOrbit(): void;
    private applyCameraOrbitImmediate;
    setWeather(mode: 'clear' | 'morning' | 'sunset' | 'night' | 'rain'): string;
    setGraphicsPreset(level: 'high' | 'medium' | 'low'): string;
    equipWeapon(slot: number): void;
    setAiming(aiming: boolean): void;
    fireOnce(): void;
    detonateC4(): void;
    setPhoneOpen(open: boolean): boolean;
    setWorldMapOpen(open: boolean): boolean;
    toggleF2Spawner(): boolean;
    getNearestNPCPosition(): {
        id: number;
        x: number;
        y: number;
        z: number;
    } | null;
    teleportNextToNearestNPC(offsetDist?: number): boolean;
    getUIStates(): {
        phoneOpen: boolean;
        spawnerOpen: boolean;
        worldMapOpen: boolean;
        mainMenuOpen: boolean;
        pointerLocked: boolean;
    };
    spawnAndEnterVehicle(type: string, driveMs?: number): Promise<any>;
    exitVehicle(): void;
    sampleJitter(frames?: number): Promise<number>;
    measureRain360(): QARainStats;
    collectTelemetry(): QATelemetryReport;
}
