import { VirtualPixelMatrix } from "./VirtualPixelMatrix";

export const RayCast = (x: number, y: number, virtualPixelMatrix: VirtualPixelMatrix) => {
    let VirtualPixel = null;
    for (let i = 0; i < virtualPixelMatrix.pixels.length; i++) {
        for (let j = 0; j < virtualPixelMatrix.pixels[i].length; j++) {
            if (y >= virtualPixelMatrix.pixels[i][j].y && y <= virtualPixelMatrix.pixels[i][j].y + virtualPixelMatrix.pixels[i][j].h
                && x >= virtualPixelMatrix.pixels[i][j].x && x <= virtualPixelMatrix.pixels[i][j].x + virtualPixelMatrix.pixels[i][j].w) {
                VirtualPixel = virtualPixelMatrix.pixels[i][j];
            }
        }
    }
    return VirtualPixel;
}