console.log(SolarSystem);
console.log("Manu Date",SolarSystem.manufactureDate);

SolarSystem.setPlanets("AnotherPlanet");
console.log("SolarSystem ",SolarSystem.getPlanets());

SolarSystem.setActiveSpacecraft("Test5");
console.log("ActiveSpacecraft", SolarSystem.getActiveSpacecraft());

SolarSystem.setPlanetsLandedOn(5);
console.log("Planets Landed on", SolarSystem.getPlanetsLandedOn());

SolarSystem.setClosestStars("Another Star");
console.log("Closest Star ", SolarSystem.getClosestStars());

SolarSystem.setAgeOfSolarSystem(4);
console.log("Age of the Solar system ", SolarSystem.getAgeOfSolarSystem());

SolarSystem.setDwarfPlanets("Another dwarf planet");
console.log("Dwarf planets ", SolarSystem.getDwarfPlanets());


