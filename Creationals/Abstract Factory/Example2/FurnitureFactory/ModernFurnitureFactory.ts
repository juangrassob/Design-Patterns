import { AbstractFurnitureFactory } from './Interfaces';
import { AbstractChair, AbstractTable } from './Interfaces/Furniture';

class ModernChair implements AbstractChair {
  public sitDown(): string {
    return 'You just have sit down in a Modern Chair.';
  }
}

class ModernTable implements AbstractTable {
  public haveDinner(): string {
    return 'You are having dinner in a Modern Table.';
  }
}

export class ModernFurnitureFactory implements AbstractFurnitureFactory {
  getChair(): AbstractChair {
    return new ModernChair();
  }

  getTable(): AbstractTable {
    return new ModernTable();
  }
}
