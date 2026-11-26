import { World } from '../world/World';
export declare class VehicleSpawner {
    private world;
    private panelElement;
    private isVisible;
    private spawnedVehicles;
    private gltfLoader;
    constructor(world: World);
    private createPanel;
    private bindEvents;
    isPanelVisible(): boolean;
    hide(): void;
    toggle(): void;
    spawnVehicle(type: string): void;
    clearAllVehicles(): void;
}
