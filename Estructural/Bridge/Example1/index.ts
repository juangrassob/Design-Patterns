interface Implementation {
  operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return `ConcreteImplementation A operation`;
  }
}
class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return `ConcreteImplementation B operation`;
  }
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction operation result: ${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Extended Abstraction operation result: ${result}`;
  }
}

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}

const implementationA = new ConcreteImplementationA();
const abstraction1 = new Abstraction(implementationA);

clientCode(abstraction1);

const implementationB = new ConcreteImplementationB();
const abstraction2 = new Abstraction(implementationB);

clientCode(abstraction2);

const extendedAbstraction2 = new ExtendedAbstraction(implementationB);

clientCode(extendedAbstraction2);
