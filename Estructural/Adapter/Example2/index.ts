interface IRoundPeg {
  getRadius(): number;
}

class RoundHole {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public fits(peg: IRoundPeg): boolean {
    return this.radius >= peg.getRadius();
  }
}

class RoundPeg {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }
}

class SquarePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  public getWidth(): number {
    return this.width;
  }
}

const roundHole = new RoundHole(10);
const roundPeg10 = new RoundPeg(10);
const roundPeg20 = new RoundPeg(20);

console.log(
  `The roundPeg10 ${roundHole.fits(roundPeg10) ? '' : 'not '}fit the hole`
);
console.log(
  `The roundPeg20 ${roundHole.fits(roundPeg20) ? '' : 'not '}fit the hole`
);

const squarePeg = new SquarePeg(14);
// I cant check if the squarePeg fits into de hole like:
// roundHole.fits(squarePeg);
// But i can build an adapter

class SquarePegAdapter implements IRoundPeg {
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    this.peg = peg;
  }

  public getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}

// Now, we can call the fits method with an instance of the adapter

const squarePegAdapter = new SquarePegAdapter(squarePeg);
console.log(
  `The roundPeg10 ${roundHole.fits(squarePegAdapter) ? '' : 'not '}fit the hole`
);
