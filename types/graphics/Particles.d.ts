import * as particles from '@pixi/particle-emitter';
import { Vec2 } from '../jmath/Vec';
import { prng } from '../jmath/rand';
import { BloodParticle } from './PixiUtils';
import type Underworld from '../Underworld';
import { Container, ParticleContainer } from 'pixi.js';
import { JEmitter } from '../types/commonTypes';
export declare const containerParticles: ParticleContainer | undefined;
export declare const containerParticlesUnderUnits: ParticleContainer | undefined;
export declare function wrappedEmitter(config: particles.EmitterConfigV3, container: Container, resolver?: () => void): {
    container: Container;
    emitter: particles.Emitter;
} | undefined;
export declare function simpleEmitter(position: Vec2, config: particles.EmitterConfigV3, resolver?: () => void, container?: ParticleContainer): JEmitter | undefined;
interface Trail {
    lerp: number;
    position: Vec2;
    moveFn: (lerpValue: number) => Vec2;
    emitter: particles.Emitter;
    resolver: () => void;
}
export declare function addTrail(position: Vec2, target: Vec2, underworld: Underworld, config: particles.EmitterConfigV3): Promise<void>;
export declare function cleanUpTrail(trail: Trail): void;
export declare function makeManaTrail(start: Vec2, target: Vec2, underworld: Underworld, colorStart: string, colorEnd: string): Promise<void>;
export declare function updateParticles(delta: number, bloods: BloodParticle[], seedrandom: prng, underworld: Underworld): void;
export declare function logNoTextureWarning(where: string): void;
export declare function createParticleTexture(): import("pixi.js").Texture<import("pixi.js").Resource> | undefined;
export declare function createHardCircleParticleTexture(): import("pixi.js").Texture<import("pixi.js").Resource> | undefined;
export declare function moveStreakEmitter(position: Vec2, prediction: boolean): JEmitter | undefined;
export declare function cleanUpEmitters(onlyTurnScopedEmitters: boolean): void;
export {};
