interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(volume: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}

class Television implements Device {
  private isEnable: boolean;
  private volume: number;
  private channel: number;

  constructor() {
    this.isEnable = false;
    this.volume = 10;
    this.channel = 50;
  }

  isEnabled(): boolean {
    return this.isEnable;
  }
  enable(): void {
    this.isEnable = true;
  }
  disable(): void {
    this.isEnable = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}

class Radio implements Device {
  private isEnable: boolean;
  private volume: number;
  private channel: number;

  constructor() {
    this.isEnable = false;
    this.volume = 10;
    this.channel = 50;
  }

  isEnabled(): boolean {
    return this.isEnable;
  }
  enable(): void {
    this.isEnable = true;
  }
  disable(): void {
    this.isEnable = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    this.volume = volume;
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
}

class Remote {
  private devise: Device;

  constructor(device: Device) {
    this.devise = device;
  }

  public togglePower() {
    if (this.devise.isEnabled()) {
      this.devise.disable();
    } else {
      this.devise.enable();
    }
  }

  public volumeUp() {
    this.devise.setVolume(this.devise.getVolume() + 10);
  }

  public volumeDown() {
    this.devise.setVolume(this.devise.getVolume() - 10);
  }

  public chanelUp() {
    this.devise.setChannel(this.devise.getChannel() + 1);
  }

  public chanelDown() {
    this.devise.setChannel(this.devise.getChannel() - 1);
  }
}

const tv = new Television();
console.log(tv);
const tvRemote = new Remote(tv);
tvRemote.togglePower();
tvRemote.volumeUp();
console.log(tv);

const radio = new Radio();
console.log(radio);
const radioRemote = new Remote(radio);
radioRemote.togglePower();
radioRemote.volumeDown();
console.log(radio);
