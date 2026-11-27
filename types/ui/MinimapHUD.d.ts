import { World } from '../world/World';
/**
 * Compact HTML5 Canvas 2D Minimap HUD (#logioi-minimap-wrap / #logioi-minimap-canvas):
 * - Hard-locks explicit pixel dimensions (150x150 PC, 110x110 Mobile) with !important + inline styles
 *   so global `canvas { width: 100vw; height: 100dvh; }` in base.css never stretches it.
 * - Uses devicePixelRatio (capped at 2) for crisp radar grid, gold/white self arrow,
 *   and real-time bright green dots (#22c55e) for all P2P players in room.
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
    private appliedCssSize;
    private appliedDpr;
    private readonly WORLD_RADIUS_METERS;
    private static readonly tmpQuat;
    private static readonly tmpFwd;
    constructor(world: World);
    private createDOM;
    private syncCanvasDimensions;
    update(dt: number): void;
    private renderMinimap;
}
