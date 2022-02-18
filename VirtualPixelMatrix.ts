import { VirtualPixel } from "./VirtualPixel";

export class VirtualPixelMatrix {
    pixels: Array<Array<VirtualPixel>>;

    constructor(public w, public h, public vw, public vh, public ctx, public display: boolean) {
        this.pixels = new Array(h).fill(null);
        for (let i = 0; i < h; i++) {
            this.pixels[i] = new Array(w).fill(null);
            for (let j = 0; j < w; j++) {
                this.pixels[i][j] = new VirtualPixel(j * vw, i * vh, vw, vh, 'white', i, j, display);


            }
        }
    }

    /**
     * Render the matrix pixel by pixel
     */
    public render() {
        for (let i = 0; i < this.vh; i++) {
            for (let j = 0; j < this.vw; j++) {
                if (this.pixels[i][j].display) {
                    this.ctx.fillStyle = this.pixels[i][j].c;
                    this.ctx.fillRect(...this.pixels[i][j].RectangleProps);
                }

            }
        }
    }
}