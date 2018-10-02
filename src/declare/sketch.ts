/**
 * @author WMXPY
 * @namespace Declare
 * @description Sketch
 */

export interface IEnvironment {
    width: number;
}

export interface ISketch {
    render(environment: IEnvironment): string;
}
