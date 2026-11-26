import { World } from '../world/World';
declare type PhoneAppId = 'home' | 'map' | 'missions' | 'jobs' | 'garage' | 'weather' | 'bank' | 'sms' | 'contacts' | 'dialer' | 'clock';
/**
 * Nam Cang Smartphone ("NC-Tel OS 98") toggled by [F].
 * Slides up from bottom-right with pointer lock release and 8 real functional apps:
 * Rotating Minimap Radar, Garage Spawner, 4-mode Weather/Time, NC Bank, SMS Inbox, Contacts, Cheat Dialer, Clock & Stopwatch.
 */
export declare class PhoneUI {
    private world;
    private shellEl;
    private screenEl;
    private clockStatusEl;
    private openState;
    private activeApp;
    private timeSpeedMultiplier;
    private stopwatchRunning;
    private stopwatchSeconds;
    private dialDigits;
    private mapZoom;
    private mapRenderAccum;
    private clockSyncAccum;
    private smsList;
    constructor(world: World);
    private createDOM;
    isOpen(): boolean;
    toggle(): void;
    open(): void;
    close(): void;
    getGameClockString(): string;
    getUnreadCount(): number;
    pushSMS(sender: string, body: string): void;
    refreshIfOpen(): void;
    update(timeStep: number): void;
    private formatStopwatch;
    openApp(app: PhoneAppId): void;
    private renderScreen;
    private renderHomeApp;
    private renderMapApp;
    private renderMinimapCanvas;
    private renderGarageApp;
    private renderWeatherApp;
    private renderBankApp;
    private renderSmsApp;
    private renderContactsApp;
    private renderDialerApp;
    private executeNumberAction;
    private renderClockApp;
    private renderMissionsApp;
    private renderJobsApp;
    dispose(): void;
}
export {};
