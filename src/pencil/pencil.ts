/**
 * @author WMXPY
 * @namespace Pencil
 * @description Binding
 */

import { IEnvironment, ISketch } from "sudoo-pencil#declare/sketch";

export class Pencil {
    private _root: ISketch[];

    public constructor() {
        this._root = [];
    }

    public sketch(sketch: ISketch): Pencil {
        this._root.push(sketch);
        return this;
    }

    public render(environment: IEnvironment): string {
        return this._root
            .map((sketch: ISketch) => sketch.render(environment))
            .join('\n');
    }
}
