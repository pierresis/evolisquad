const { Given, When, Then } = require('cucumber');

Given('We have a population with an initial count of {int} Evoli', function (int, callback) {
    callback(null, 'pending');
});


When('The User start the simulation', function (callback) {
    callback(null, 'pending');
});

Then('I count {int} Evoli', function (int, callback) {
    callback(null, 'pending');
});