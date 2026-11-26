import * as THREE from 'three';
export declare const TARGET_HUMANOID_HEIGHT = 1.72;
export declare type OutfitStyleId = 'denim' | 'vest' | 'racer' | 'bank_staff' | 'stealth' | 'street_polo' | 'worker_denim';
export declare type CapStyleId = 'none' | 'ncpd_dark' | 'racer_red' | 'khaki';
export declare type PlayerGender = 'male' | 'female';
export declare type HumanoidRoleId = 'civilian' | 'police' | 'swat' | 'army' | 'worker' | 'office' | 'vendor' | 'villager';
export interface AvatarAppearanceOptions {
    hairColorHex?: number;
    showGlasses?: boolean;
    capStyle?: CapStyleId;
    capColorHex?: number;
    shirtColorHex?: number;
    pantsColorHex?: number;
    shoesColorHex?: number;
}
export interface HumanoidRigOptions {
    gender?: PlayerGender;
    role?: HumanoidRoleId;
    outfit?: OutfitStyleId;
    hatStyle?: 'none' | 'cap' | 'non_la' | 'police' | 'army' | 'worker' | 'ponytail_only';
    faceVariant?: number;
    shirtColorHex?: number;
    pantsColorHex?: number;
    shoesColorHex?: number;
    hairColorHex?: number;
    capColorHex?: number;
    showGlasses?: boolean;
    cloneMaterials?: boolean;
}
export interface UnifiedHumanoidRig {
    root: THREE.Group;
    bodyScaler: THREE.Group;
    gender: PlayerGender;
    role: HumanoidRoleId;
    basePelvisY: number;
    worldHeight: number;
    pelvisGroup: THREE.Group;
    torsoGroup: THREE.Group;
    headGroup: THREE.Group;
    armUpperL: THREE.Group;
    armUpperR: THREE.Group;
    armLowerL: THREE.Group;
    armLowerR: THREE.Group;
    legUpperL: THREE.Group;
    legUpperR: THREE.Group;
    legLowerL: THREE.Group;
    legLowerR: THREE.Group;
    rightHandMount: THREE.Group;
    leftHandMount: THREE.Group;
    npcPistol: THREE.Group;
    npcRifle: THREE.Group;
    roleRefs: {
        torso: THREE.Mesh;
        pelvis: THREE.Mesh;
        upperArmL: THREE.Mesh;
        upperArmR: THREE.Mesh;
        forearmSleeveL: THREE.Mesh;
        forearmSleeveR: THREE.Mesh;
        thighL: THREE.Mesh;
        thighR: THREE.Mesh;
        shinL: THREE.Mesh;
        shinR: THREE.Mesh;
        defaultShirtMat: THREE.MeshStandardMaterial;
        defaultTrouserMat: THREE.MeshStandardMaterial;
        glassesGroup: THREE.Group;
        capGroup: THREE.Group;
        nonLaGroup: THREE.Group;
        policeHatGroup: THREE.Group;
        armyHatGroup: THREE.Group;
        workerHatGroup: THREE.Group;
        baseHairAccessories: THREE.Group;
    };
    setOutfit: (styleId: OutfitStyleId) => void;
    setAppearance: (opts: AvatarAppearanceOptions) => void;
    setRoleUniform: (role: HumanoidRoleId, shirtMat?: THREE.Material, pantsMat?: THREE.Material) => void;
    calibrateWorldHeight: (targetHeight?: number) => {
        height: number;
        minY: number;
    };
}
export interface SkeletonDriverRefs {
    root: THREE.Object3D;
    buttBone: THREE.Bone | null;
    buttRestY: number;
    bodyLower: THREE.Bone | null;
    bodyUpper: THREE.Bone | null;
    headBone: THREE.Bone | null;
    armUpperL: THREE.Bone | null;
    armUpperR: THREE.Bone | null;
    armLowerL: THREE.Bone | null;
    armLowerR: THREE.Bone | null;
    legUpperL: THREE.Bone | null;
    legUpperR: THREE.Bone | null;
    legLowerL: THREE.Bone | null;
    legLowerR: THREE.Bone | null;
}
export interface ProceduralAvatarResult {
    appliedToBones: boolean;
    skinnedMeshFound: boolean;
    usesUnifiedRig: boolean;
    gender: PlayerGender;
    root: THREE.Object3D;
    unifiedRig: UnifiedHumanoidRig;
    driver: SkeletonDriverRefs;
    torsoBone: THREE.Bone | null;
    headBone: THREE.Bone | null;
    rightHandBone: THREE.Bone | null;
    leftHandBone: THREE.Bone | null;
    rightHandMount: THREE.Group;
    leftHandMount: THREE.Group;
    cleanupGroups: THREE.Object3D[];
    setOutfit: (styleId: OutfitStyleId) => void;
    setAppearance: (opts: AvatarAppearanceOptions) => void;
    syncFromSkeleton: () => void;
}
/**
 * Single Source of Truth Humanoid Avatar Builder (`TARGET_HUMANOID_HEIGHT = 1.72` meters):
 * - Builds both Player (Male/Female) and ALL NPCs (civilian, police, SWAT, army, quest, shop)
 *   from the exact same seamless, connected-joint geometry in real meters.
 * - Eliminates floating pill gaps via embedded spherical joint caps at shoulders, elbows, hips,
 *   knees, neck/collar & ankle/sneaker cuffs.
 * - Normalizes via `THREE.Box3().setFromObject(visualRoot)` strictly to 1.72m with flat soles at y = 0.000m.
 */
export declare class ProceduralAvatarBuilder {
    private static sharedGeos;
    private static baseMats;
    private static faceTexCache;
    private static readonly Q_LIMB_FIX;
    private static readonly tmpQ0;
    private static readonly tmpQ1;
    private static readonly tmpQ2;
    private static readonly tmpQ3;
    private static readonly tmpQ4;
    private static readonly tmpVec;
    static measureVisibleBounds(root: THREE.Object3D): THREE.Box3;
    static createRoundedBlockGeo(w: number, h: number, d: number, radius?: number): THREE.BufferGeometry;
    /**
     * Creates a smooth tapered rounded limb/capsule spanning strictly y = [0 .. totalLen].
     */
    static createCapsuleGeo(rTop: number, rBot: number, totalLen: number, radialSegs?: number): THREE.BufferGeometry;
    private static ensureSharedGeos;
    private static getBaseMaterials;
    private static getFaceTexture;
    private static makeMesh;
    /**
     * Builds the ONE shared unified 1.72m solid rounded humanoid rig in true world meters.
     * Used by Player (Male/Female), Remote Players, Pedestrians, Police/SWAT/Army, & Quest NPCs.
     */
    static createHumanoidRig(opts?: HumanoidRigOptions): UnifiedHumanoidRig;
    /**
     * Extracts bone references from `boxman.glb`, removes legacy raw `game_man` SkinnedMesh from bounds
     * while preserving bones for AnimationMixer, and wraps our unified 1.72m rig cleanly.
     */
    static buildSkeletonDrivenAvatar(driverScene: THREE.Object3D, gender?: PlayerGender): ProceduralAvatarResult;
    /**
     * Copies world-space animation rotations cleanly from `boxman.glb` bones onto our unified 1.72m rig
     * without inheriting `Armature` 0.38 scale or wide skeleton proportions.
     */
    static syncRigFromSkeleton(rig: UnifiedHumanoidRig, driver: SkeletonDriverRefs): void;
    /**
     * Backwards-compatible wrapper used by any external caller.
     */
    static apply(sceneRoot: THREE.Object3D, gender?: PlayerGender): ProceduralAvatarResult;
}
