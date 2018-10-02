/**
 * @author WMXPY
 * @namespace Sketch
 * @description Lane
 */

import { ISketch } from "sudoo-pencil#declare/sketch";

export class SketchLane implements ISketch {
    private _content: string;

    public constructor(content: string) {
        this._content = content;
    }

    public render(): string {
        return this._content;
    }
}
