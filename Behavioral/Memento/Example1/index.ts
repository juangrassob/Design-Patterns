import crypto from "crypto";

class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${this.state}`);
  }

  public doSomething(): void {
    console.log(`Originator: Im doing something important.`);
    this.state = this.generateRandomString(5);
    console.log(`Originator: My new state is: ${this.state}`);
  }

  private generateRandomString(length: number) {
    return crypto.randomBytes(length).toString("hex");
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has been restored to: ${this.state}`);
  }
}

interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString();
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state})`;
  }

  public getDate(): string {
    return this.date;
  }
}

class CareTaker {
  private mementos: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): void {
    this.mementos.push(this.originator.save());
  }

  public undo(): void {
    const memento = this.mementos.pop();

    if (memento) {
      this.originator.restore(memento);
    }

    return;
  }

  public showHistory(): void {
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}

const originator = new Originator("juan");
const careTaker = new CareTaker(originator);

careTaker.backup();
originator.doSomething();

careTaker.backup();
originator.doSomething();

careTaker.backup();
originator.doSomething();

console.log("");
careTaker.showHistory();

console.log("Rollback");
careTaker.undo();

console.log("");
careTaker.showHistory();
careTaker.undo();
careTaker.undo();
// I can undo as much as i want but the max is the initial state
careTaker.undo();
careTaker.undo();
careTaker.undo();
careTaker.undo();
