import { World } from '../world/World';
export declare type MapFilterCategory = 'all' | 'emergency' | 'commerce' | 'safehouse' | 'landmarks';
/**
 * Full-screen interactive 15 km2 Nam Cang World Map overlay toggled by [M].
 * Draws natural organic coastline, Curved Perimeter Highway, Red Striped Restricted Zones (K-98 & Đầm Đông),
 * Sunset Pier, Lake Town & Dirt Airstrip, Hydroelectric Dam, Group Filters & GPS/Fast Travel.
 */
export declare class WorldMapOverlay {
    private world;
    private overlayEl;
    private canvas;
    private offscreen;
    private selectionBox;
    private isVisible;
    private readonly MAP_PX;
    private selectedTarget;
    private activeFilter;
    private staticPins;
    constructor(world: World);
    private initStaticPins;
    private createDOM;
    private worldToCanvas;
    private canvasToWorld;
    private drawHatchedZone;
    private prerenderBaseMap;
    toggle(): void;
    isOpen(): boolean;
    show(): void;
    hide(): void;
    update(): void;
    private getFilteredPins;
    private drawLiveMap;
    private handleCanvasClick;
    private fastTravelTo;
    dispose(): void;
}
