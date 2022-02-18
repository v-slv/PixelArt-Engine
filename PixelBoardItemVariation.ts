import { VirtualPixelMatrix } from "./VirtualPixelMatrix";

export class PixelBoardItemVariation {
    virtualPixelMatrix: VirtualPixelMatrix;

    constructor(
        public name,
        public w,
        public h,
        public vw,
        public vh,
        private ctx,
        public alpha: boolean
    ) {
        this.virtualPixelMatrix = new VirtualPixelMatrix(w, h, vw, vh, ctx, alpha);
    }
}