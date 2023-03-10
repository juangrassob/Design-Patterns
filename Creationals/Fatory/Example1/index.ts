interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    const operationResult = product.operation();

    return `This is the result of this product operation: ${operationResult}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    const factoryMethodResult = new ConcreteProduct1();

    return factoryMethodResult;
  }
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'Result of the Product 1';
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return `Result of the Product 2`;
  }
}

const concreteCreator1 = new ConcreteCreator1();
console.log(concreteCreator1.someOperation());

const concreteCreator2 = new ConcreteCreator2();
console.log(concreteCreator2.someOperation());
