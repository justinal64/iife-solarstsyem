// 1. Public property for holding the last modified date
// return modifiedDate is an example
// 2. getter/setter for planets
// 3. getter/setter for activeSpacecraft
// 4. getter/setter for planetsLandedOn
var SolarSystem = (function () {
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
    var activeSpacecraft = ["Test1", "Test2"];
    var planetsLandedOn = 0;
    return {

        manufactureDate: new Date(),
        getPlanets: function() {
            return planets;
        },
        setPlanets: function(planet) {
            planets.push(planet);
        },
        getActiveSpacecraft: function() {
            return activeSpacecraft;
        },
        setActiveSpacecraft: function(spacecraft) {
            activeSpacecraft.push(spacecraft);
        },
        getPlanetsLandedOn: function() {
            return planetsLandedOn;
        },
        setPlanetsLandedOn: function(x) {
            planetsLandedOn = x;
        }
    };

})();
