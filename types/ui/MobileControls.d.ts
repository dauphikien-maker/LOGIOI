import { World } from '../world/World';
/**
 * Full GTA-Mobile Touch Interface for Web Phones & Tablets:
 * - ZERO graphics degradation: NEVER lowers pixelRatio, shadows, chunks, or texture quality!
 * - Auto-activates on touch devices, with manual override toggle in Settings for PC testing.
 * - Left half: Virtual Analog Joystick (walk vs edge-sprint) or Vehicle L/R Steer buttons.
 * - Right half: 360° touch-drag Camera Rotation (replaces PointerLock) + translucent Action Cluster.
 */
export declare class MobileControls {
    private world;
    private rootEl;
    private leftZoneEl;
    private rightTouchAreaEl;
    private joyBaseEl;
    private joyKnobEl;
    private steerWrapEl;
    private footClusterEl;
    private driveClusterEl;
    private btnInteractFootEl;
    private btnInteractDriveEl;
    private btnAimEl;
    private btnReloadEl;
    private btnC4El;
    private btnSurrenderEl;
    private btnWeaponCycleEl;
    private btnChatEl;
    private btnMicEl;
    private enabled;
    private joyTouchId;
    private joyCenterX;
    private joyCenterY;
    private readonly JOY_MAX_R;
    private camTouchId;
    private camLastX;
    private camLastY;
    private touchAimToggle;
    private lastInVehicle;
    private uiRefreshAccum;
    constructor(world: World);
    private detectInitialEnabled;
    isTouchActive(): boolean;
    setEnabled(val: boolean): void;
    private applyTouchClass;
    private createDOM;
    private bindEvents;
    private triggerVehicleKey;
    private bindTap;
    private bindHold;
    private updateJoystickFromTouch;
    private resetJoystick;
    private resetAllTouchInputs;
    update(timeStep: number): void;
    dispose(): void;
}
