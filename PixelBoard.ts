import { PixelBoardItem } from "./PixelBoardItem";
import { PenTool, penToolAction, PixelBoardTool } from "./PixelBoardTool";
import { RayCast } from "./RayCast";
import { getTransformedPoint } from "./utils";

export class PixelBoard {
    public boardWidth = 32;
    public boardHeight = 32;
    public items: PixelBoardItem[] = [];
    public itemIndex = 0;
    private workingItem = 0;
    private canvas;
    private ctx;
    private canvasLeft: number;
    private canvasTop: number;
    private canvasWidth: number;
    private canvasHeight: number;
    private virtualWidth: number;
    private virtualHeight: number;

    public tools = [new PixelBoardTool<PenTool>(
        'pen', penToolAction, {
        color: 'black'
    }
    )];
    public currentTool = 0;

    get WorkingVirtualMatrix() {
        return this.items[this.workingItem].workingVariation.virtualPixelMatrix;
    }

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.canvasLeft = this.canvas.offsetLeft + this.canvas.clientLeft;
        this.canvasTop = this.canvas.offsetTop + this.canvas.clientTop;
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.virtualWidth = this.canvasWidth / this.boardWidth;
        this.virtualHeight = this.canvasHeight / this.boardHeight;
        this.createDefaultItem();
        this.render();
        this.canvas.addEventListener('click', this.onToolUse.bind(this), false);
    }

    private createDefaultItem() {
        this.items.push(new PixelBoardItem(`Item ${this.itemIndex++}`, this.boardWidth, this.boardHeight, this.virtualWidth, this.virtualHeight, this.ctx, true));
        this.workingItem = 0;
    }

    public addItem(){
        this.workingItem = this.itemIndex++;
        this.items.push(new PixelBoardItem(`Item ${this.itemIndex}`, this.boardWidth, this.boardHeight, this.virtualWidth, this.virtualHeight, this.ctx, false));
        console.log('__change work item', this.workingItem);
        this.render();
    }

    public render() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].render();
        }
    }

    private onToolUse(event) {
        let { x, y } = getTransformedPoint(event.x, event.y, this.ctx);
        let virtualPixelMatrix = this.WorkingVirtualMatrix;
        let hitPixel = RayCast(x - this.canvasLeft, y - this.canvasTop, virtualPixelMatrix);
        if (hitPixel) {
            this.tools[this.currentTool].useOn(hitPixel);
        }
        this.render();
    }
}
