interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {};

  set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }
  get(id: string): T {
    return this.db[id];
  }
}

const pokemonDb = new InMemoryDatabase<Pokemon>();

pokemonDb.set({ id: '1', attack: 10, defense: 20 });
