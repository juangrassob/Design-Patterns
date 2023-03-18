export {};

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    const result = this.strategy.doAlgorithm(["x", "b", "c", "a", "h", "c"]);
    console.log(result);
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class ConcreteStrategy1 implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategy2 implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new ConcreteStrategy1());
console.log("Doing something with strategy1:");
context.doSomeBusinessLogic();

console.log("Doing something with strategy2:");
context.setStrategy(new ConcreteStrategy2());
context.doSomeBusinessLogic();
