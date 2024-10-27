const { describe, expect, it } = require("@jest/globals");
const Scooter = require("../classes/Scooter.js");

describe("scooter.rent(user)", () => {
  it.skip("checks a scooter out to a user", () => {
    // Arrange
    const scooter = Scooter('Scooter1');
    const user = { id: 'user1' };
    // Act
    scooter.rent(user);
    // Assert
    expect(scooter.isRented).toBe(true);
    expect(scooter.rentedBy).toBe(user);
  });

  it.skip("throws an error if battery dead or scooter broken", () => {
    // Arrange
    const scooter = new Scooter('Scooter1');
    const user = { id: 'user1' };
    // Act
    scooter.rent(user);
    // Assert
    expect(() => scooter.rent(user)).toThrow('Unable to rent: Battery dead or scooter broken');
  });
});

describe("scooter.dock(station)", () => {
  it.skip("returns a scooter to a station", () => {
    // Arrange
    const scooter = new Scooter('Scooter1');
    scooter.isRented = true;
    const station = 'Central';

    // Act
    scooter.dock(station); 

    // Assert
    expect(scooter.isRented).toBe(false); 
    expect(scooter.station).toBe(station);
  });
});

describe("scooter.charge()", () => {
  it.skip("charges a scooter", () => {
    // Arrange
    const scooter = new Scooter('Scooter1');
    scooter.batteryLevel = 20;

    // Act
    await scooter.charge(); 

    // Assert
    expect(scooter.batteryLevel).toBe(100);
  });
});

describe("scooter.repair()", () => {
  it.skip("repairs a scooter", () => {
    // Arrange
    const scooter = new Scooter('Scooter1');
    scooter.isBroken = true;

    // Act
    await scooter.repair(); 

    // Assert
    expect(scooter.isBroken).toBe(false);
  });
});
