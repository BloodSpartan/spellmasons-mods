import Underworld from "../Underworld";
import { HasSpace } from "../entity/Type";
import { Vec2 } from "../jmath/Vec";
export declare const defaultPushDistance = 140;
export declare const EXPECTED_MILLIS_PER_GAMELOOP = 16;
export declare function forcePushDelta(pushedObject: HasSpace, deltaMovement: Vec2, underworld: Underworld, prediction: boolean): Promise<void>;
export declare function forcePushTowards(pushedObject: HasSpace, towards: Vec2, distance: number, underworld: Underworld, prediction: boolean): Promise<void>;
export declare function forcePushAwayFrom(pushedObject: HasSpace, awayFrom: Vec2, distance: number, underworld: Underworld, prediction: boolean): Promise<void>;
export declare function forcePushToDestination(pushedObject: HasSpace, destination: Vec2, distanceMultiplier: number, underworld: Underworld, prediction: boolean): Promise<void>;
