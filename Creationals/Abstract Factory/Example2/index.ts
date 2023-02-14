import {
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
} from './FurnitureFactory';
import { AbstractFurnitureFactory } from './FurnitureFactory/Interfaces';

function buildLivingRoom(style: 'modern' | 'victorian') {
  console.log(
    `I'm building a ${style} living room. I'd bought the ${style} furniture pack so i don't get mixed styles.`
  );

  let furnitureFactory: AbstractFurnitureFactory;

  switch (style) {
    case 'modern':
      furnitureFactory = new ModernFurnitureFactory();
      break;
    case 'victorian':
      furnitureFactory = new VictorianFurnitureFactory();
      break;

    default:
      furnitureFactory = new ModernFurnitureFactory();
  }

  const chair = furnitureFactory.getChair();
  const table = furnitureFactory.getTable();

  console.log(chair.sitDown());
  console.log(table.haveDinner());
}

buildLivingRoom('modern');
buildLivingRoom('victorian');
