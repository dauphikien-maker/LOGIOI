import { World } from '../world/World';
export interface MainMenuSettings {
    graphicsQuality: string;
    renderDistance: number;
    shadows: boolean;
    bloom: boolean;
    targetFps: 30 | 60;
    mouseSensitivity: number;
    audioVolume: number;
}
export declare class MainMenu {
    private world;
    private menuElement;
    private settingsPanel;
    private slotsPanel;
    private pauseBtn;
    private isVisible;
    private isPaused;
    private selectedIndex;
    private menuItems;
    private settings;
    private boundKeyHandler;
    constructor(world: World);
    private createMenuHTML;
    private bindEvents;
    syncGenderUI(gender: 'male' | 'female'): void;
    private handleKeyboard;
    private moveSelection;
    private updateSelection;
    private activateItem;
    private handleSaveLocalClick;
    private openSingleplayerSlots;
    private closeSingleplayerSlots;
    private renderSingleplayerSlots;
    private startSingleplayer;
    private resumeGame;
    showPauseMenu(): void;
    returnToMainMenu(): void;
    syncPauseButtonVisibility(): void;
    private openSettings;
    private closeSettings;
    syncGraphicsQualityUI(quality: string): void;
    syncRenderDistanceUI(distance: number): void;
    private applySettings;
    isMenuVisible(): boolean;
    hideMenuForMultiplayer(): void;
}
