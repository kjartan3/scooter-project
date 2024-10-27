const { describe, expect, it } = require("@jest/globals");
const ScooterApp = require("../classes/ScooterApp.js");

describe("ScooterApp.registerUser(username, password, age)", () => {
  it.skip("registers a new user if old enough", () => {
    // Arrange
    const scooterApp = new ScooterApp();
    const username = 'tester';
    const password = '1234';
    const age = 18;
    // Act
    const result = ScooterApp.registerUser(username, password, age);
    // Assert
    expect(result).toBe(true);
    expect(ScooterApp.registerUsers[username]).toBeDefined();
    expect(ScooterApp.registerUsers[username].age).toBe(age);
  });

  it.skip("throws an error if too young or already registered", () => {
    // Arrange
    const scooterApp = new ScooterApp();
    const username = 'tester';
    const password = '1234';
    const age = 17;
    // Act
    const result1 = ScooterApp.registerUser(username, password, age);
    const result2 = ScooterApp.registerUser(username, '4321', 20);
    // Assert
    expect(result1, result2).toBe(false);
    expect(ScooterApp.registerUsers[username]).toBeDefined();

  });
});

describe("ScooterApp.loginUser(username, password)", () => {
  it.skip("logs in a registered user", () => {
    // Arrange
    const username = 'tester';
    const password = '1234';
    // Act
    const result = ScooterApp.loginUser(username, password);
    // Assert
    expect(result).toEqual(expectedResult);
  });

  it.skip("throws an error if user not found or password incorrect", () => {
    // Arrange
    const username = 'tester';
    const password = '1234';
    // Act
    const result1 = ScooterApp.loginUser(null, null);
    const result2 = ScooterApp.loginUser(username, '234');
    // Assert
    expect(result1, result2).toBe(false);
  });
});

describe("ScooterApp.logoutUser(username)", () => {
  it.skip("logs out a registered user", () => {
    // Arrange
    const username = 'tester';
    // Act
    const result = ScooterApp.logoutUser(username);
    // Assert
    expect(result).toBe(true);
  });

  it.skip("throws an error if user not found", () => {
    // Arrange
    const username = 'tester';
    // Act
    const result = ScooterApp.logoutUser('');
    // Assert
    expect(result).toBe(false);
  });
});

describe("ScooterApp.dockScooter(scooter, station)", () => {
  it.skip("docks a scooter at a station", () => {
    // Arrange
    const scooter = { id: 'scooter1' };
    const station = 'Central'; 
    ScooterApp.stations = { Central: [] };
    // Act
    ScooterApp.dockScooter(scooter, station);
    // Assert
    expect(ScooterApp.stations[station].toContain(scooter));
  });

  it.skip("throws an error if a station does not exist", () => {
    // Arrange
    const scooter = { id: 'scooter1' };
    const station = 'Centrally'; 
    // Act
    const result = ScooterApp.dockScooter(scooter, station);
    // Assert
    expect(result).toBe(false);
    expect(() => ScooterApp.dockScooter(scooter, station)).toThrow('Station does not exist');
  });

  it.skip("throws an error if a scooter is already at a station", () => {
    // Arrange
    const scooter = { id: 'scooter1' };
    const station = 'Central'; 
    ScooterApp.stations = { Central: [scooter] };
    // Act
    const result = ScooterApp.dockScooter(scooter, station);
    // Assert
    expect(result).toBe(false);
    expect(() => ScooterApp.dockScooter(scooter, station)).toThrow('Scooter already at station');
  });
});

describe("ScooterApp.rentScooter(scooter, user)", () => {
  it.skip("rents a scooter out to a user", () => {
    // Arrange
    const scooter = { id: 'scooter1', isRented: false };
    const user = { id: 'user1' };
    // Act
    ScooterApp.rentScooter(scooter, user);
    // Assert
    expect(scooter.isRented).toBe(true);
    expect(scooter.rentedBy).toBe(user);
  });

  it.skip("throws an error if a scooter is already rented", () => {
    // Arrange
    const scooter = { id: 'scooter1', isRented: true }; 
    const user = { id: 'user1' }; 
    // Act
    ScooterApp.rentScooter(scooter, user);
    // Assert
    expect(() => ScooterApp.rentScooter(scooter, user)).toThrow('Scooter is already rented');
  });
});
