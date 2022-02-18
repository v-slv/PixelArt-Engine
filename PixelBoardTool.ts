import { VirtualPixel } from "./VirtualPixel";

export interface PenTool {
    color: string;
}
export const penToolAction: toolAction = function(penContext: PenTool, vp: VirtualPixel) {
    vp.display = true;
    vp.c = penContext.color;
}

export type toolAction = (context: any, vp: VirtualPixel) => void;

export class PixelBoardTool<T> {
    constructor(public name: string, public action: toolAction, public toolcontext: T) {

    }

    useOn(vp: VirtualPixel) {
        this.action(this.toolcontext, vp);
    }
}