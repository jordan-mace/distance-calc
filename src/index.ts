export type Point = { x: number; y: number; z?: number };

/**
 * Calculates Euclidean distance between two points
 * @param a First point
 * @param b Second point
 * @returns Distance between points
 */
export function distance(a: Point, b: Point): number {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dz = (b.z || 0) - (a.z || 0);
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}