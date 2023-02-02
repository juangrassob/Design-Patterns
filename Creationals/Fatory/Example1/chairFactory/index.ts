import { IChair } from './chair';
import LargeChair from './large-chair';
import MediumChair from './medium-chair';
import SmallChair from './small-chair';

export default class ChairFactory {
  static getChair(size: 's' | 'm' | 'l'): IChair {
    switch (size) {
      case 's':
        return new SmallChair();
      case 'm':
        return new MediumChair();
      case 'l':
        return new LargeChair();
    }
  }
}
