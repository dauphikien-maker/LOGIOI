import { LoadingTrackerEntry } from './LoadingTrackerEntry';
import { Scenario } from '../world/Scenario';
import { World } from '../world/World';
export declare class LoadingManager {
    firstLoad: boolean;
    onFinishedCallback: () => void;
    onProgressCallback: (percentage: number) => void;
    private world;
    private gltfLoader;
    private loadingTracker;
    constructor(world: World);
    notifyProgress(): void;
    loadGLTF(path: string, onLoadingFinished: (gltf: any) => void): void;
    addLoadingEntry(path: string): LoadingTrackerEntry;
    doneLoading(trackerEntry: LoadingTrackerEntry): void;
    createWelcomeScreenCallback(scenario: Scenario): void;
    getLoadingPercentage(): number;
    private isLoadingDone;
}
