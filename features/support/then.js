const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Then('I count {int} Evoli', function (initialPopulationCount) {
    expect(this.getPopulationCount()).to.equal(initialPopulationCount);
});

Then('I count {int} tiles of type {string}', function (tileCount, tileType) {
    expect(this.getMap().getTiles().length).to.equal(tileCount);
    expect("CHANGEME TO AN ACTUAL TEST").to.equal(tileType);
});

Then('Evoli has moved', function () {
    expect("CHANGEME TO AN ACTUAL TEST").to.equal("SOME OTHER CONDITION");
});
