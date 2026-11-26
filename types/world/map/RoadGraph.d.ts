export interface RoadGraphNode {
    id: number;
    x: number;
    z: number;
    edges: Array<{
        to: number;
        cost: number;
    }>;
}
/**
 * Spatial Road Graph & A* Shortest-Path GPS Solver for Nam Cảng:
 * Connects urban avenues/streets, 3 canal bridges, the curved perimeter Ring Highway,
 * Xóm Làng Nam Bộ meandering lanes, Mountain Foothill passes, Port & Airport arteries.
 * Guarantees realistic turn-by-turn road paths (< 0.2ms per query), never crow-flies lines.
 */
export declare class RoadGraph {
    private static nodes;
    private static built;
    private static nodeKeyMap;
    private static ensureBuilt;
    private static findNearestNodes;
    /**
     * Runs A* over the Nam Cảng road network and returns multi-segment world waypoints from start -> destination.
     */
    static findShortestPath(startX: number, startZ: number, endX: number, endZ: number): Array<{
        x: number;
        z: number;
    }>;
}
