const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation);
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const modesOfTransport = this.journeys.map(journey => journey.transport);
  return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyByDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeyByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allModesOfTransport = this.getModesOfTransport();
  uniqueArray = allModesOfTransport.filter(function(mode, pos) {
    return allModesOfTransport.indexOf(mode) == pos;
  })
  return uniqueArray;
};


module.exports = Traveller;
