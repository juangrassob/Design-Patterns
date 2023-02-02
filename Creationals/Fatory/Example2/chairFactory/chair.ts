type Dimension = {
  height: number;
  width: number;
  depth: number;
};

export interface IChair extends Dimension {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Dimension;
}

export default class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  public getDimensions(): Dimension {
    return { width: this.width, height: this.height, depth: this.depth };
  }
}
