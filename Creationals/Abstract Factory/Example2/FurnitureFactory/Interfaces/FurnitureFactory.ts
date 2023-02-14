import { AbstractChair, AbstractTable } from './Furniture';

export interface AbstractFurnitureFactory {
  getChair(): AbstractChair;
  getTable(): AbstractTable;
}
