export {};

abstract class Command<State> {
  abstract execute(state: State): State;
  abstract undo(state: State): State;
}

class CommandStack<State> {
  private stack: Command<State>[] = [];
  private _state: State;

  constructor(initialState: State) {
    this._state = initialState;
  }

  get state() {
    return this._state;
  }

  public getHistory(): Command<State>[] {
    return this.stack;
  }

  public execute(command: Command<State>) {
    this._state = command.execute(this._state);
    this.stack.push(command);
  }

  public undo() {
    const command = this.stack.pop();
    if (command) {
      this._state = command.undo(this._state);
    }
  }
}

class AddOne extends Command<number> {
  public execute(state: number): number {
    return state + 1;
  }

  public undo(state: number): number {
    return state - 1;
  }
}

class SubtractOne extends Command<number> {
  public execute(state: number): number {
    return state - 1;
  }

  public undo(state: number): number {
    return state + 1;
  }
}

class SetValue extends Command<number> {
  private _originalValue: number;
  private value: number;

  constructor(value: number) {
    super();
    this.value = value;
  }

  public execute(state: number): number {
    this._originalValue = state;
    return this.value;
  }

  public undo(_state: number): number {
    return this._originalValue;
  }
}

const cs = new CommandStack<number>(0);
cs.execute(new AddOne());
cs.execute(new SubtractOne());
cs.execute(new SetValue(42));
console.log(cs.state);
cs.execute(new AddOne());
console.log(cs.state);
console.log(cs.getHistory());
cs.undo();
console.log(cs.state);
