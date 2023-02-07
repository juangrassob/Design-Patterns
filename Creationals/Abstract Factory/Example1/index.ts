interface AbstractProductA {
  usefulActionA(): string;
}

interface AbstractProductB {
  usefulActionB(): string;
}

interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteProductA1 implements AbstractProductA {
  public usefulActionA(): string {
    return 'This is the action of the product A1';
  }
}

class ConcreteProductB1 implements AbstractProductB {
  public usefulActionB(): string {
    return 'This is the action of the product A1';
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

class ConcreteProductA2 implements AbstractProductA {
  public usefulActionA(): string {
    return 'This is the action of the product A2';
  }
}
class ConcreteProductB2 implements AbstractProductB {
  public usefulActionB(): string {
    return 'This is the action of the product B2';
  }
}

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulActionA());
  console.log(productB.usefulActionB());
}

console.log('Testing factory 1');
clientCode(new ConcreteFactory1());

console.log('Testing factory 2');
clientCode(new ConcreteFactory2());
