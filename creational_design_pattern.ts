//1. Database Connection Manager
// Problem: You need to ensure there’s only one database
//  connection in your app to avoid wasting resources and
//   simplify management.

// Solution: The Singleton Pattern is ideal here. 
// It ensures that only one DatabaseConnection instance 
// is created and shared across the entire application. Efficient
//  and easy to manage!

class DatabaseConnection {
    private static instance: DatabaseConnection;
  
    private constructor() {
      console.log("New DatabaseConnection instance created.");
    }
  
    static getInstance(): DatabaseConnection {
      if (!DatabaseConnection.instance) {
        DatabaseConnection.instance = new DatabaseConnection();
      }
      return DatabaseConnection.instance;
    }
  
    query(sql: string) {
      console.log(`Executing query: ${sql}`);
    }
  }
  
  // Usage
  const db1 = DatabaseConnection.getInstance();
  db1.query("SELECT * FROM users");
  
  const db2 = DatabaseConnection.getInstance();
  console.log(db1 === db2); // true, same instance


//2.Remote Control for Home Appliances
//   Problem: You need a way to create different vehicles, 
//   like cars and bikes, without cluttering your main app 
//   with creation logic.

// Solution: The Factory Pattern handles this. It decides which
//  vehicle to build based on input, keeping the creation process
//   separate and easy to extend later.

// Product interface
interface Vehicle {
    drive(): void;
  }
  
  // Concrete Products
  class Car implements Vehicle {
    drive(): void {
      console.log("Driving a car");
    }
  }
  
  class Bike implements Vehicle {
    drive(): void {
      console.log("Riding a bike");
    }
  }
  
  // Creator (Factory)
  class VehicleFactory {
    static createVehicle(type: string): Vehicle {
      if (type === "car") {
        return new Car();
      } else if (type === "bike") {
        return new Bike();
      } else {
        throw new Error("Vehicle type not supported");
      }
    }
  }
  
  // Usage
  const car = VehicleFactory.createVehicle("car");
  car.drive();
  
  const bike = VehicleFactory.createVehicle("bike");
  bike.drive();
  