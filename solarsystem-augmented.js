// 1. getter/setter for closest stars to the sun
// 2. getter/setter for age of the solar SolarSystem
// 3. getter/setter for known dwarf planets

var SolarSystem = (function(newSolarSystem) {
    var closestStars = ["Alpha Centauri"];
    var ageOfSolarSystem = 0;
    var dwarfPlanets = ["Pluto"];

    newSolarSystem.getClosestStars = function() {
        return closestStars;
    },
    newSolarSystem.setClosestStars = function(star) {
        closestStars.push(star);
    },
    newSolarSystem.getAgeOfSolarSystem = function() {
        return ageOfSolarSystem;
    },
    newSolarSystem.setAgeOfSolarSystem = function(age) {
        ageOfSolarSystem = age;
    },
    newSolarSystem.getDwarfPlanets = function() {
        return dwarfPlanets;
    },
    newSolarSystem.setDwarfPlanets = function(dPlanet) {
        dwarfPlanets.push(dPlanet);
    }

    return newSolarSystem;
})(SolarSystem || {});