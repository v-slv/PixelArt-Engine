export class VirtualPixel {

    get RectangleProps () {
        return [this.x, this.y, this.w, this.h];
    }

    constructor(public x, public y, public w, public h, public c, public i, public j, public display: boolean) {

    }
}