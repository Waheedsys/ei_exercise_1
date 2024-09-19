//1. Scenario: Stock Price Tracker

// Problem: A group of investors wants real-time updates on 
// stock prices, but manually checking isn’t ideal.

// Solution: The Observer Pattern is perfect here. Make the
// Stock the subject, and Investor objects will subscribe as
// observers. Whenever the stock price changes, all registered
// investors are automatically notified. This keeps things
// flexible and ensures the stock and investors are loosely connected.

// Observer interface
interface Observer {
    update(stockPrice: number): void;
  }
  
  // Subject (Stock)
  class Stock {
    private observers: Observer[] = [];
    private price: number = 100;
  
    addObserver(observer: Observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    setPrice(newPrice: number) {
      this.price = newPrice;
      this.notifyObservers();
    }
  
    private notifyObservers() {
      this.observers.forEach(observer => observer.update(this.price));
    }
  }
  
  // Concrete Observer (Investor)
  class Investor implements Observer {
    constructor(private name: string) {}
  
    update(stockPrice: number): void {
      console.log(`${this.name} notified: New stock price is $${stockPrice}`);
    }
  }
  
  // Usage
  const stock = new Stock();
  const investor1 = new Investor("Investor 1");
  const investor2 = new Investor("Investor 2");
  
  stock.addObserver(investor1);
  stock.addObserver(investor2);
  
  stock.setPrice(105); // Investors get notified



//2. Scenario: Remote Control for Home Appliances
  
// Problem: You have a smart home with appliances like lights 
// and fans, and you need an easy way to control them without hardcoding
//  commands.

// Solution: The Command Pattern simplifies things. Create
//  commands like LightOnCommand and LightOffCommand, and pass
//   them to a RemoteControl. This way, the remote can control
//    any appliance without needing to change its code. Simple and flexible!

// Command interface
interface Command {
    execute(): void;
  }
  
  // Receiver class (Light)
  class Light {
    on() {
      console.log("Light is ON");
    }
  
    off() {
      console.log("Light is OFF");
    }
  }
  
  // Concrete Command classes
  class LightOnCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.on();
    }
  }
  
  class LightOffCommand implements Command {
    constructor(private light: Light) {}
  
    execute(): void {
      this.light.off();
    }
  }
  
  // Invoker class
  class RemoteControl {
    private command: Command;
  
    setCommand(command: Command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }
  
  // Usage
  const light = new Light();
  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);
  
  const remote = new RemoteControl();
  
  remote.setCommand(lightOn);
  remote.pressButton(); // Light is ON
  
  remote.setCommand(lightOff);
  remote.pressButton(); // Light is OFF


  