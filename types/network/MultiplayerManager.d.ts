import * as THREE from 'three';
import { World } from '../world/World';
export interface RoomSummary {
    roomId: string;
    roomName: string;
    hostUsername?: string;
    hostName: string;
    mapName: string;
    weather: 'morning' | 'sunset' | 'night' | 'rain';
    worldTimeMinutes?: number;
    playerCount: number;
    maxPlayers: number;
    hasPassword: boolean;
}
/**
 * LOGIOI P2P PeerJS Multiplayer & Universal Chat Manager:
 * - Zero central game server required: creator is Host (`Peer('logioi-' + code6)`), others connect P2P (max 20/room).
 * - Host syncs positions, vehicles, weather, clock, shots, chat & saves room progress locally (+ .logioi.json export).
 * - Integrated PeerJS WebRTC audio-only VoiceChatManager (`[V]` / mobile Mic button).
 * - Universal `[T]` Chat (Singleplayer commands + Online room chat) with salted SHA-256 Admin toggle.
 */
export declare class MultiplayerManager {
    private world;
    private peer;
    private hostConn;
    private hostClients;
    private hostRoomPassword;
    private hostSavedClientProgress;
    private hostPendingLoadSave;
    private joinTimeoutHandle;
    private gltfLoader;
    private playerName;
    private clientKey;
    private pendingAutoJoinRoomId;
    private recentRooms;
    private lobbyTab;
    private clientId;
    private currentRoom;
    private isHost;
    private connectionState;
    private lastErrorMsg;
    private lobbyEl;
    private lobbyVisible;
    private labelLayerEl;
    private labelPool;
    private chatHudEl;
    private chatMessagesEl;
    private chatInputWrapEl;
    private chatInputEl;
    private chatRoomHeaderEl;
    private voicePeersPanelEl;
    private voicePeersOpen;
    private chatOpen;
    private chatFadeTimer;
    private chatHistory;
    private remotePlayers;
    private tracers;
    private blasts;
    private tracerMat;
    private blastFireGeo;
    private blastRingGeo;
    private sendAccum;
    private progressSaveAccum;
    private projVec;
    private tmpSeatPos;
    private tmpSeatOffsetUp;
    constructor(world: World);
    private parseInviteFromUrl;
    private extractRoomCode;
    private generateRoomCode;
    private loadPrefs;
    private savePrefs;
    private loadRecentRooms;
    private saveRecentRoom;
    private createDOM;
    isLobbyOpen(): boolean;
    isInRoom(): boolean;
    isHostRoom(): boolean;
    isChatInputOpen(): boolean;
    getPendingInviteCode(): string;
    openLobby(): void;
    closeLobby(): void;
    /**
     * Opens universal `[T]` chat bar in both Singleplayer (for commands) & Online (room chat + commands).
     */
    openChatInput(): void;
    closeChatInput(): void;
    private applyAdminState;
    private submitChat;
    sendVoiceState(speaking: boolean): void;
    syncRoomWeatherIfHost(weather: 'morning' | 'sunset' | 'night' | 'rain'): void;
    refreshVoiceUI(): void;
    private clearJoinTimeout;
    private destroyPeer;
    private copyText;
    private startHostRoom;
    private handleHostIncomingConnection;
    private joinPeerRoom;
    private handleClientMessageFromHost;
    private handleRemoteRoomClosed;
    private getConnectedPeerIds;
    private broadcastToClients;
    private sendToHost;
    private collectLocalPlayerStateMsg;
    private sanitizePlayerState;
    private buildRoomPlayersList;
    private saveHostWorldToLocalStorage;
    private collectServerProgressSnapshot;
    private applyServerProgress;
    private enterWorldFromOnline;
    leaveRoom(): void;
    private getLocalAnimState;
    notifyWeaponFire(start: THREE.Vector3, end: THREE.Vector3, weaponSlot: number, kind: 'bullet' | 'explosion' | 'melee'): void;
    private handleRemoteWeaponFire;
    private syncRoomPlayersList;
    private upsertRemotePlayer;
    private findVehicleByNetworkId;
    private findOrCreateNetworkVehicle;
    private releaseRemoteDriverVehicle;
    private attachRemoteVehicleVisual;
    private spawnRemoteAvatar;
    private buildRemoteWeaponProps;
    private refreshRemoteWeaponVisibility;
    private playRemoteAnim;
    private removeRemotePlayer;
    private clearAllRemotePlayers;
    update(timeStep: number): void;
    private lerpAngle;
    private pushChatMessage;
    private getInviteUrl;
    private renderVoicePeersList;
    private updateRoomBarText;
    private renderChatBox;
    private escapeHtml;
    private renderLobby;
    private syncPlayerNameFromInput;
    private bindLobbyEvents;
    dispose(): void;
}
