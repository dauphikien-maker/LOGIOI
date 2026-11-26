import { World } from '../world/World';
declare type Peer = any;
declare type MediaConnection = any;
/**
 * PeerJS WebRTC Audio-Only Voice Chat Manager:
 * - Zero video streams; ultra-low CPU/bandwidth overhead with echoCancellation & noiseSuppression.
 * - Uses active PeerJS `peer.call(remotePeerId, localStream)` and `peer.on('call', ...)`.
 * - Falls back gracefully to listen-only when HTTP blocks navigator.mediaDevices.getUserMedia.
 */
export declare class VoiceChatManager {
    private world;
    private peer;
    private localStream;
    private peers;
    private remoteMutedIds;
    private connectedPeerIds;
    micEnabled: boolean;
    roomSpeakerMuted: boolean;
    micUnavailableReason: string;
    isLocalSpeaking: boolean;
    private audioCtx;
    private analyser;
    private sourceNode;
    private sampleData;
    private voiceCheckAccum;
    constructor(world: World);
    private checkCapability;
    setPeer(peer: Peer | null): void;
    syncConnectedPeers(remotePeerIds: string[]): void;
    toggleMic(): Promise<boolean>;
    private stopLocalMediaAndOutgoingCalls;
    private setupAnalyser;
    private callAllConnectedPeers;
    private getOrCreateEntry;
    private attachRemoteStream;
    callPeer(remotePeerId: string): void;
    handleIncomingCall(call: MediaConnection): void;
    toggleRoomSpeakerMute(): boolean;
    togglePeerMute(remotePeerId: string): boolean;
    isPeerMuted(remotePeerId: string): boolean;
    removePeer(remotePeerId: string): void;
    leaveAll(): void;
    update(dt: number): void;
    private updateSpeakingState;
    dispose(): void;
}
export {};
