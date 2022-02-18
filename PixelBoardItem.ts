import { PixelBoardItemVariation } from "./PixelBoardItemVariation";
import { VirtualPixelMatrix } from "./VirtualPixelMatrix";

export class PixelBoardItem {
    private workingVariationIndex;
    public variations: PixelBoardItemVariation[] = [];

    public get workingVariation() {
        return this.variations[this.workingVariationIndex];
    }

    constructor(
        public name,
        public w,
        public h,
        public vw,
        public vh,
        private ctx,
        public alpha: boolean
    ) {
        this.variations.push(new PixelBoardItemVariation('variation', w, h, vw, vh, ctx, alpha));
        this.workingVariationIndex = 0;
    }

    render() {
        this.workingVariation.virtualPixelMatrix.render();
    }

    
}