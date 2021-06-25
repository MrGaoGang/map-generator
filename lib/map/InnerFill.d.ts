import { Filler } from "./Filler";
export declare class InnerFiller extends Filler {
    constructor(value: number, name: string, xCount: number, yCount: number);
    fillReaming(dataMap: DataMapType): void;
    fillWithRow(dataMap: DataMapType, showType: "average" | "average-vertical"): void;
    fill(dataMap: DataMapType, start: PointType): void;
}
//# sourceMappingURL=InnerFill.d.ts.map