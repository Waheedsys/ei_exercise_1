//1. Adapter for Payment Services
// Problem: You’re integrating multiple payment services like
//  PayPal and Stripe, each with its own API, but you want a 
//  unified way to interact with them.

// Solution: The Adapter Pattern is the answer. Create an adapter 
// for each payment service, allowing your app to communicate through
//  a common PaymentGateway interface, no matter which service you’re
//   using. Simple and seamless!

// Target interface
interface PaymentGateway {
    makePayment(amount: number): void;
  }
  
  // Adaptee (PayPal)
  class PayPal {
    sendPayment(amount: number) {
      console.log(`Payment of $${amount} made through PayPal.`);
    }
  }
  
  // Adapter for PayPal
  class PayPalAdapter implements PaymentGateway {
    private paypal: PayPal;
  
    constructor(paypal: PayPal) {
      this.paypal = paypal;
    }
  
    makePayment(amount: number): void {
      this.paypal.sendPayment(amount);
    }
  }
  
  // Adaptee (Stripe)
  class Stripe {
    chargePayment(amount: number) {
      console.log(`Payment of $${amount} made through Stripe.`);
    }
  }
  
  // Adapter for Stripe
  class StripeAdapter implements PaymentGateway {
    private stripe: Stripe;
  
    constructor(stripe: Stripe) {
      this.stripe = stripe;
    }
  
    makePayment(amount: number): void {
      this.stripe.chargePayment(amount);
    }
  }
  
  // Usage
  const paypalAdapter = new PayPalAdapter(new PayPal());
  paypalAdapter.makePayment(100);
  
  const stripeAdapter = new StripeAdapter(new Stripe());
  stripeAdapter.makePayment(200);

  
// 2.Problem: You run a coffee shop where customers want
//  to order various coffees with extras like milk and sugar,
//   but you don’t want to change the core coffee class.

// Solution: The Decorator Pattern is perfect here. You can wrap
//  your coffee objects with different decorators for milk, sugar,
//   and more, allowing you to add extras dynamically. Flexible and easy!

// Component interface
interface Coffee {
    cost(): number;
    description(): string;
  }
  
  // Concrete Component
  class Espresso implements Coffee {
    cost(): number {
      return 50;
    }
  
    description(): string {
      return "Espresso";
    }
  }
  
  // Base Decorator
  class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    cost(): number {
      return this.coffee.cost();
    }
  
    description(): string {
      return this.coffee.description();
    }
  }
  
  // Concrete Decorators
  class MilkDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 10;
    }
  
    description(): string {
      return this.coffee.description() + ", Milk";
    }
  }
  
  class SugarDecorator extends CoffeeDecorator {
    cost(): number {
      return this.coffee.cost() + 5;
    }
  
    description(): string {
      return this.coffee.description() + ", Sugar";
    }
  }
  
  // Usage
  let myCoffee: Coffee = new Espresso();
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
  
  myCoffee = new MilkDecorator(myCoffee);
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
  
  myCoffee = new SugarDecorator(myCoffee);
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

  
  


