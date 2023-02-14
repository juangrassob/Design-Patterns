import { AbstractFurnitureFactory } from './Interfaces';
import { AbstractChair, AbstractTable } from './Interfaces/Furniture';

class VictorianChair implements AbstractChair {
  public sitDown(): string {
    return 'You just have sit down in a Victorian Chair.';
  }
}

class VictorianTable implements AbstractTable {
  public haveDinner(): string {
    return 'You are having dinner in a Victorian Table.';
  }
}

export class VictorianFurnitureFactory implements AbstractFurnitureFactory {
  public getChair(): AbstractChair {
    return new VictorianChair();
  }

  public getTable(): AbstractTable {
    return new VictorianTable();
  }
}
