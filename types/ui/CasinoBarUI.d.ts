import { World } from '../world/World';
declare type CasinoTab = 'bar' | 'roulette' | 'blackjack';
/**
 * Full Nightclub Bar + European Roulette (0-36) + Casino Blackjack (21) UI
 * for Club Đêm Nam Cảng & CLB Bi-a & Bar Bờ Biển.
 */
export declare class CasinoBarUI {
    private world;
    private currentVenueTitle;
    private activeTab;
    private chipDenom;
    private strongDrinkStreak;
    private drunkTimer;
    private drunkPhase;
    private rouletteBets;
    private isSpinning;
    private wheelAngle;
    private ballAngle;
    private ballRadiusRatio;
    private spinStartTime;
    private spinDurationMs;
    private spinTargetPocketIdx;
    private spinStartWheelAngle;
    private spinTargetWheelAngle;
    private spinStartBallAngle;
    private spinTargetBallAngle;
    private rouletteRaf;
    private lastRouletteResult;
    private bjDeck;
    private bjPlayerHand;
    private bjDealerHand;
    private bjBet;
    private bjPhase;
    private bjMessage;
    constructor(world: World);
    isDrunk(): boolean;
    getDrunkRemaining(): number;
    update(timeStep: number): void;
    open(venueTitle: string, initialTab?: CasinoTab): void;
    handleModalClosed(): void;
    private renderInsideModal;
    private buildBarHtml;
    private bindBarEvents;
    private buildRouletteHtml;
    private bindRouletteEvents;
    private startRouletteSpin;
    private finishRouletteSpin;
    private drawRouletteWheel;
    private createShuffledDeck;
    private drawCard;
    private evalHand;
    private renderCardHtml;
    private buildBlackjackHtml;
    private bindBlackjackEvents;
    private resolveBlackjackRound;
}
export {};
