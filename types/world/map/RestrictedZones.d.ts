import * as THREE from 'three';
import { World } from '../World';
/**
 * Part 3 World Module — Restricted High-Security Zones & Trespassing Alarm HUD:
 * 1. Phòng Thủ K-98 (NW Coastal Defense Base ~340m x 220m, Fort Zancudo style):
 *    - Double-layer 3.5m security fence (InstancedMesh) + South Stunt Jump Ramp outside wall
 *    - Entry Guard Gate (-860, -520), 280m Military Runway, Control Tower, 3 Arched Hangars,
 *      2 White Geodesic Radar Domes, 4 Watchtowers w/ spinning red beacons & parked armored vehicles
 *    - [E] Hijack Airplane / Armored Car getaway marker at Central Hangar
 * 2. Trại Giam Đầm Đông (NE Isolated Prison 180m x 180m, Bolingbroke style):
 *    - 6m thick perimeter walls, 4 corner watchtowers, double steel gate, 3 barred cellblocks & Yard Basketball Court
 * 3. Active Red Flashing Intrusion Alert HUD (`⚠ CẢNH BÁO XÂM NHẬP KHU CẤM — BÁO ĐỘNG ★★★★`)
 *    with 10-second cooldown once escaped > 180m from perimeter
 */
export declare class RestrictedZones {
    private world;
    root: THREE.Group;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private beaconPivots;
    private alertBannerEl;
    private alarmActive;
    private alarmCooldown;
    private flashPhase;
    private disposables;
    private readonly K98_BOUNDS;
    private readonly K98_WALL_BOUNDS;
    private readonly PRISON_BOUNDS;
    constructor(world: World);
    private trackGeo;
    private createWarningSignMat;
    private addBox;
    private addCollider;
    private addWatchtower;
    private buildK98Base;
    private buildDamDongPrison;
    private createAlarmBanner;
    private isPointInsideBounds;
    update(timeStep: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
