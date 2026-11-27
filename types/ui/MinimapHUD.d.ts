import { World } from '../world/World';
/**
 * Compact HTML5 Canvas 2D Minimap HUD:
 * - Renders subtle local road grid, canals/ocean tint, GPS waypoint indicator,
 *   centered local player directional arrow, and real-time green dots (#22c55e)
 *   for P2P teammates (clamped neatly onto the rim edge when out of range).
 * - Positioned strictly clear of Mobile Floating Joystick (0..48vw) and action buttons.
 */
export declare class MinimapHUD {
    private world;
    private wrapEl;
    private canvas;
    private toggleBtn;
    private coordsEl;
    private ctx;
    private collapsed;
    private drawAccum;
    private readonly WORLD_RADIUS_METERS;
    private static readonly tmpQuat;
    private static readonly tmpFwd;
    constructor(world: World);
    private createDOM;
    update(dt: number): void;
    private renderMinimap;
}
