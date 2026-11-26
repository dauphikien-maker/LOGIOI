import * as THREE from 'three';
import { World } from '../World';
/**
 * Part 2 World Module:
 * - 2 Police Stations ("Sở Cảnh Sát Nam Cảng - NCPD" Downtown w/ Impound Lot & Helipad + Lake Town Outpost)
 * - Nam Cang General Hospital ("Bệnh Viện Đa Khoa") w/ ER Canopy, Helipad & 2 Parked Ambulances
 * - Nam Cang Fire Station w/ 3 Red Garage Bays, Drill Tower & 2 Ladder Fire Trucks
 * - 2 Small NC Bank Branches, 3 Convenience Stores ("Tạp Hóa 24H"), 2 Tiered Fashion Shops,
 *   2 Barber Shops w/ Rotating Barber Poles, Coastal Pool/Bar #2, Garage #2 & Gas Station #4
 */
export declare class CivicAndEmergencyBuildings {
    private world;
    root: THREE.Group;
    private streamedColliders;
    private lastStreamX;
    private lastStreamZ;
    private barberPoles;
    private disposables;
    constructor(world: World);
    private trackGeo;
    private createSignMat;
    private createHelipadMat;
    private createBarberPoleMat;
    private addStaticBox;
    private addCollider;
    private addApronWithRamp;
    private addParkedEmergencyVehicle;
    private buildPoliceStations;
    private buildHospital;
    private buildFireStation;
    private addShopBox;
    private buildBankBranchesAndShops;
    private buildLakeTownServices;
    update(timeStep: number): void;
    forceStreamAround(px: number, pz: number): void;
    private updateStreaming;
    dispose(): void;
}
