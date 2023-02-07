interface Builder {
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.product = new Product1();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public producePartA(): void {
    this.product.parts.push('PartA1');
  }

  public producePartB(): void {
    this.product.parts.push('PartB1');
  }

  public producePartC(): void {
    this.product.parts.push('PartC1');
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product1 {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Products parts: ${this.parts.join(', ')} \n`);
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

function clientCodeConstructor(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard Product1:');
  director.buildMinimalViableProduct();
  const minimalViableProduct = builder.getProduct();
  minimalViableProduct.listParts();

  console.log('Full Featured Product1:');
  director.buildFullFeaturedProduct();
  const fullFeaturedProduct = builder.getProduct();
  fullFeaturedProduct.listParts();

  console.log('Custom Product1');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCodeConstructor(director);
