import type * as PIXI from 'pixi.js';
import * as Image from '../graphics/Image';
import type * as Player from './Player';
import { IUnit } from './Unit';
import { Vec2 } from '../jmath/Vec';
import Underworld from '../Underworld';
import { HasSpace } from './Type';
import { Localizable } from '../localization';
import { JEmitter } from '../types/commonTypes';
export declare const PICKUP_RADIUS = 36;
export declare const PICKUP_IMAGE_PATH = "pickups/scroll";
export declare const RED_PORTAL = "Red Portal";
export declare const BLUE_PORTAL = "Blue Portal";
export declare const CURSED_MANA_POTION = "Cursed Mana Potion";
type IPickupEffect = ({ unit, player, pickup, prediction }: {
    unit?: IUnit;
    player?: Player.IPlayer;
    pickup: IPickup;
    underworld: Underworld;
    prediction: boolean;
}) => void;
type IPickupInit = ({ pickup, underworld }: {
    pickup: IPickup;
    underworld: Underworld;
}) => void;
type IPickupWillTrigger = ({ unit, player, pickup }: {
    unit?: IUnit;
    player?: Player.IPlayer;
    pickup: IPickup;
    underworld: Underworld;
}) => boolean;
export declare function isPickup(maybePickup: any): maybePickup is IPickup;
export type IPickup = HasSpace & {
    type: 'pickup';
    id: number;
    name: string;
    description: Localizable;
    imagePath?: string;
    image?: Image.IImageAnimated;
    real?: IPickup;
    playerOnly: boolean;
    turnsLeftToGrab?: number;
    text?: PIXI.Text;
    effect: IPickupEffect;
    willTrigger: IPickupWillTrigger;
    emitter?: JEmitter;
    emitterJID?: string;
    flaggedForRemoval: boolean;
};
export interface IPickupSource {
    name: string;
    modName?: string;
    description: Localizable;
    imagePath?: string;
    animationSpeed?: number;
    playerOnly?: boolean;
    turnsLeftToGrab?: number;
    scale: number;
    probability: number;
    init?: IPickupInit;
    effect: IPickupEffect;
    willTrigger: IPickupWillTrigger;
}
export declare function copyForPredictionPickup(p: IPickup): IPickup;
export declare const TIME_CIRCLE_JID = "timeCircle";
export declare function create({ pos, pickupSource, idOverride, logSource }: {
    pos: Vec2;
    pickupSource: IPickupSource;
    idOverride?: number;
    logSource?: string;
}, underworld: Underworld, prediction: boolean): IPickup;
export declare function sync(pickup: IPickup): void;
export declare function setPosition(pickup: IPickup, x: number, y: number): void;
export type IPickupSerialized = Omit<IPickup, "image" | "effect" | "text" | "real" | "emitter"> & {
    image?: Image.IImageAnimatedSerialized;
    emitter?: string;
};
export declare function serialize(p: IPickup): IPickupSerialized;
export declare function load(pickup: IPickupSerialized, underworld: Underworld, prediction: boolean): IPickup | undefined;
export declare function removePickup(pickup: IPickup, underworld: Underworld, prediction: boolean): void;
export declare function triggerPickup(pickup: IPickup, unit: IUnit, player: Player.IPlayer | undefined, underworld: Underworld, prediction: boolean): void;
export declare function tryTriggerPickup(pickup: IPickup, unit: IUnit, underworld: Underworld, prediction: boolean): void;
export declare const spike_damage = 30;
export declare const CARDS_PICKUP_NAME = "Spells";
export declare const PICKUP_SPIKES_NAME = "Trap";
export declare const PORTAL_PURPLE_NAME = "Portal";
export declare const pickups: IPickupSource[];
export declare function givePlayerUpgrade(p: Player.IPlayer, underworld: Underworld): void;
export {};
